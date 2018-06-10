import * as R from 'ramda'
import parseInlinePattern from './parseInlinePattern'
import {
  arrify,
  whenFunctionCallWith,
  isObjectLiteral,
  flow,
  falseToNull,
  splitSelectors,
  isAtRule
} from './utils'
import getDefaultUnit from './defaultUnits'

export const PSUEDO_WITHOUT_SELECTOR = /(^|\s)(:{1,2})(\w)/g
export const REFERENCE_SELECTOR = /&/g

export const isNestableAtRule = selector =>
  /@\S*\b(media|supports|keyframes)\b/.test(selector)

export const containsSpecial = str =>
  /[~`!@#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?\s]/g.test(str)

export const hasReference = selector => selector.indexOf('&') !== -1

export const isNestable = selector =>
  isAtRule(selector) && isNestableAtRule(selector)

const formatOutput = grouped =>
  Object.keys(grouped).reduce(
    (style, loc) =>
      Object.keys(grouped[loc]).reduce((style, propVal) => {
        var rule = grouped[loc][propVal]

        if (R.isNil(rule.value)) {
          return style
        }

        if (rule.value === '' && rule.property !== 'content') {
          rule.value = undefined
        }

        var location = rule.location.concat(rule.selectors.join(', '))
        location.reduce((style, selector, i, arr) => {
          if (!selector) {
            if (rule.property === '@font-face') {
              style[rule.property] = style[rule.property]
                ? arrify(style[rule.property]).concat(rule.value)
                : rule.value
            } else {
              style[rule.property] = rule.value
            }
            return style
          }
          var r = {}
          if (i === arr.length - 1) {
            r[rule.property] = rule.value
          }
          style[selector] = R.merge(style[selector], r)
          return style[selector]
        }, style)
        return style
      }, style),
    {}
  )

const groupRules = rules => {
  var grouped = {}
  for (var i = 0, len = rules.length; i < len; i++) {
    var rule = rules[i]
    var id =
      rule.property + (typeof rule.value !== 'object' ? rule.value : '__' + i)
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
  }
  return grouped
}

const getRules = ({
  obj,
  parents = [],
  location = [],
  props,
  options = {}
}) => {
  if (R.is(Function)(obj)) {
    obj = obj(props)
  }
  const { options: globalOptions, ...rules } = obj

  const getNested = (givenObj, givenParents, givenLocation) =>
    getRules({
      obj: givenObj,
      parents: givenParents,
      location: givenLocation,
      options: globalOptions,
      props
    })

  return R.pipe(
    R.keys,
    R.reduce(
      (result, selectors) =>
        R.pipe(
          splitSelectors,
          R.reduce((res, selector) => {
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
  isObjectLiteral(value) &&
  !R.isEmpty(value) &&
  !containsSpecial(selector) &&
  !R.isEmpty(selector) &&
  !isNestable(R.last(location) || []) &&
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
      R.toPairs,
      R.reduce((accumulated, [propName, rulesForProp]) => {
        return flow(
          props,
          R.ifElse(
            R.has(propName),
            R.pipe(
              R.always(rulesForProp),
              whenFunctionCallWith(props[propName], props),
              R.mergeDeepRight(accumulated)
            ),
            R.always(accumulated)
          )
        )
      }, {})
    )

    return parseNested(res, parents, location)
  }

  if (isInlinePattern(value, selector, parents)) {
    value = parseInlinePattern({
      props,
      value,
      key: selector,
      globalOptions: options
    })
    // return parseNested(value, parents, location);
    if (isObjectLiteral(value)) {
      return parseNested(value, parents, location)
    }
  }

  if (isObjectLiteral(value)) {
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

  return {
    location: location,
    selector: parents.join(' '),
    property: selector,
    value: value
  }
}

const styler = obj => props => {
  var rules

  if (R.is(Function)(obj)) {
    return styler(obj(props))(props)
  }
  if (Array.isArray(obj)) {
    rules = obj.reduce((r, o) => {
      return r.concat(getRules({ obj: o, props }))
    }, [])
  } else {
    // return obj
    rules = getRules({ obj, props })
  }
  return flow(rules, groupRules, formatOutput)
}

export default styler
