import {
  toArray,
  split,
  length,
  gt,
  reject,
  pipe,
  isEmpty,
  replace,
  toLower,
  is,
  when,
  reduce,
  mapValues as map,
  join,
  always,
  merge,
  prop,
  curryN,
  isNil,
  contains,
  ifElse
} from '@roseys/futils'

const toUpper = str => str.toUpperCase()

const capitalize = replace(/^[a-z]/, toUpper)
const camscalRegex = new RegExp(/[\s_-]/, 'g')
const decapitalize = replace(/^[A-Z]/, toLower)

const cleanCamscal = pipe(
  split(camscalRegex),
  reject(isEmpty),
  when(x => gt(length(x), 1), map(pipe(toLower, capitalize))),
  join(''),
  decapitalize
)

const camelCase = pipe(cleanCamscal, decapitalize)

const stylerCx = (prefix, props_) => {
  const isBool = is('Boolean')
  let collectObjProps = {}
  const checkPropType = name =>
    when(
      x => is('Array', x) || is('Object', x),
      x => {
        collectObjProps[name] = x

        return 'skip'
      }
    )

  const keyOrValue = name =>
    pipe(
      prop(name),
      checkPropType(name),
      when(isNil, always('skip')),
      when(isBool, x => (x ? name : 'skip'))
    )(props_)

  const keyOrValueSingle = name =>
    pipe(
      prop(name),
      when(isNil, always('skip')),
      checkPropType(name),
      ifElse(isBool, x => (x ? name : 'skip'), x => [name, x])
    )(props_)

  const step1 = pipe(toArray, map(keyOrValue))
  const noSkip = pipe(join(' '), camelCase, x => ({ [x]: true }))
  const skipCond = contains('skip')
  const Skip = always({})

  const reduceSingle = arr =>
    reduce(
      (acc, v) => {
        return [...acc, ...toArray(keyOrValueSingle(v))]
      },
      [],
      arr
    )

  const res = reduce(
    (acc, v) => {
      if (is('Array', v)) {
        return pipe(step1, ifElse(skipCond, Skip, noSkip), merge(acc))(v)
      }

      return pipe(
        toArray,
        reduceSingle,
        ifElse(skipCond, Skip, noSkip),
        merge(acc)
      )(v)
    },
    {},
    prefix
  )
  // console.log('collectObjProps', collectObjProps)
  return { ...res, theme: props_.theme, ...collectObjProps }
}

export default curryN(2, stylerCx)

// const p_ = {
//   variant: 'regular',
//   primary: true,
//   minimal: true,
//   size: 'small'
// }

// console.log(stylerCx(['size', 'variant', ['variant', 'primary'], ['primary', 'minimal']],p_))
