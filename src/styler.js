import {
  isNil,
  merge,
  is,
  keys,
  reduce,
  isEmpty,
  last,
  always,
  pipe,
  mergeDeepRight,
  ifElse,
  has,
  flow,
  toArray,
  isObject
} from '@roseys/futils'

import stylerCx from './stylerCx'

import parseInlinePattern from './parseInlinePattern'
import {
  whenFunctionCallWith,
  falseToNull,
  splitSelectors,
  isAtRule,
  logger,
  evalTemplate,
  isTemplate
} from './utils'
import getDefaultUnit from './defaultUnits'

export const PSUEDO_WITHOUT_SELECTOR = /(^|\s)(:{1,2})(\w)/g
export const REFERENCE_SELECTOR = /&/g

export const isNestableAtRule = selector =>
  /@\S*\b(media|supports|keyframes)\b/.test(selector)

export const containsSpecial = str =>
  /[~`!@#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?\s]/g.test(str) // eslint-disable-line no-useless-escape

export const hasReference = selector => selector.indexOf('&') !== -1

export const isNestable = selector =>
  isAtRule(selector) && isNestableAtRule(selector)

const reduceRule = (rules, result) =>
  reduce(
    (style, rule, ruleid) => {
      if (isNil(rule.value)) {
        return style
      }
      if (rule.value === '' && rule.property !== 'content') {
        rule.value = undefined
      }
      /// For Nested selectors
      var location = rule.location.concat(rule.selectors.join(', '))
      location.reduce((style, selector, i, arr) => {
        selector = selector.trim()
        if (!selector) {
          if (rule.property === '@font-face') {
            style[rule.property] = style[rule.property]
              ? toArray(style[rule.property]).concat(rule.value)
              : rule.value
          } else {
            style[rule.property] = rule.value
          }
          return style
        }
        const r = {}
        if (i === arr.length - 1) {
          r[rule.property] = rule.value
        }
        style[selector] = merge(style[selector] || {}, r)
        return style[selector]
      }, style)
      // return style[selector]
      return style
    },
    result,
    rules
  )

const formatOutput = grouped => {
  return reduce(
    (result, rules, parentSelector) => {
      return reduceRule(rules, result)
    },
    {},
    grouped
  )
}

const groupRules = (rules, group = true) => {
  const idFn = (property, selector, value, i) => {
    if (group) {
      return (
        property +
        (selector === '' ? 'root' : '') +
        (typeof value !== 'object' ? value : '__' + i)
      )
    }
    return selector + property + (typeof value !== 'object' ? value : '__' + i)
  }

  return reduce(
    (grouped, rule, i) => {
      var id = idFn(rule.property, rule.selector, rule.value, i)

      if (!grouped[rule.location]) {
        grouped[rule.location] = {}
      }

      if (!grouped[rule.location][id]) {
        grouped[rule.location][id] = {
          location: rule.location,
          selectors: rule.selector ? [rule.selector] : [],
          property: rule.property,
          value: rule.value
        }
      } else if (rule.selector) {
        grouped[rule.location][id].selectors.push(rule.selector)
      }
      return grouped
    },
    {},
    rules
  )
}

const getRules_ = ({ obj, props }) => {
  const log = logger(props.debug)
  const { options, ...rules } = obj
  let newProps = { ...props }

  if (options) {
    const { cx, ...opt } = options
    if (cx) {
      newProps = stylerCx(cx, props)
    }
    log('options', opt)
    //  log('newProps', {obj,newProps})
    return getRules({ obj: { ...rules, options: opt }, props: newProps })
  }
  // log('getRules_')
  return getRules({ obj, props })
}

const getRules = ({
  obj,
  parents = [],
  location = [],
  props,
  options = {}
}) => {
  if (is('Function')(obj)) {
    obj = obj(props)
  }
  const { options: globalOptions, ...rules } = obj
  options = { ...options, ...globalOptions }
  const getNested = (givenObj, givenParents, givenLocation) =>
    getRules({
      obj: givenObj,
      parents: givenParents,
      location: givenLocation,
      options: options,
      props
    })
  const log = logger(props.debug)
  log('gOptions', options)
  return pipe(
    keys,
    reduce(
      (result, selectors) =>
        pipe(
          splitSelectors,
          reduce((res, selector) => {
            const parsed = parseRules(
              getNested,
              selector,
              rules[selectors],
              parents.slice(),
              location.slice(),
              props,
              options
            )

            return res.concat(parsed)
          }, result)
        )(selectors),
      []
    )
  )(obj)
}

const isPatternBlock = key => key === '__match'

const isInlinePattern = (value, selector, location) =>
  isObject(value) &&
  !isEmpty(value) &&
  !containsSpecial(selector) &&
  !isEmpty(selector) &&
  !isNestable(last(location) || []) &&
  !isPatternBlock(selector)

const parseRules = (
  parseNested,
  selector,
  value,
  parents,
  location,
  props,
  options
) => {
  var next = selector
  value = flow(value, whenFunctionCallWith(props), falseToNull)

  if (parents.length) {
    next = next.replace(PSUEDO_WITHOUT_SELECTOR, '$1&$2$3')
    if (hasReference(next)) {
      next = next.replace(REFERENCE_SELECTOR, parents.pop())
    }
  }
  if (selector === '@font-face') {
    return { location: [], selector: '', property: selector, value: value }
  }

  if (isPatternBlock(selector)) {
    const res = flow(
      value,
      reduce((accumulated, rulesForProp, propName) => {
        return flow(
          props,
          ifElse(
            has(propName),
            pipe(
              always(rulesForProp),
              whenFunctionCallWith(props[propName], props),
              mergeDeepRight(accumulated)
            ),
            always(accumulated)
          )
        )
      }, {})
    )

    return parseNested(res, parents, location)
  }
  const log = logger(props.debug)
  log('isInlinePattern', options)
  if (isInlinePattern(value, selector, parents)) {
    value = parseInlinePattern({
      props,
      value,
      key: selector,
      globalOptions: options
    })
    // return parseNested(value, parents, location);
    if (isObject(value)) {
      return parseNested(value, parents, location)
    }
  }

  if (isObject(value)) {
    var nestable = isNestable(selector)
    if (nestable) {
      location = location.concat(selector)
    } else if (isAtRule(selector)) {
      parents = [next]
      location = []
    } else if (
      location.length &&
      isNestable(location[location.length - 1]) &&
      location[location.length - 1].indexOf(' ') === -1
    ) {
      location[location.length - 1] += ' ' + selector
    } else {
      parents = parents.concat(next)
    }

    return parseNested(value, parents, location)
  }
  // value = computeGetter({ val: value, options, selector, props });
  if (typeof value === 'number' && value !== 0) {
    const unit = getDefaultUnit(selector)
    if (unit) {
      value = value + unit
    }
  }

  if (isTemplate(value)) {
    value = evalTemplate(value, props)
  }
  return {
    location: location,
    selector: parents.join(' '),
    property: selector,
    value: value
  }
}

const styler = (obj, groupSelectors = false) => props => {
  var rules
  if (is('Function')(obj)) {
    return styler(obj(props))(props)
  }
  if (Array.isArray(obj)) {
    rules = obj.reduce((r, o) => {
      return r.concat(getRules({ obj: o, props }))
    }, [])
  } else {
    // return obj
    rules = getRules_({ obj, props })
  }

  return flow(rules, groupRules, formatOutput)
}

export default styler
