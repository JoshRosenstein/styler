import {
  toArray,
  pipe,
  is,
  when,
  reduce,
  mapValues,
  join,
  always,
  merge,
  prop,
  curryN,
  isNil,
  contains,
  ifElse,
  toCamelCase
} from '@roseys/futils'


const stylerCx = (prefix, props_) => {
  const isBool = is('Boolean')
  const checkPropType =
    when(
      x => is('Array', x) || is('Object', x),always('skip')

    )

  const keyOrValue = name =>
    pipe(
      prop(name),
      checkPropType,
      when(isNil, always('skip')),
      when(isBool, x => (x ? name : 'skip'))
    )(props_)

  const alwaysKey = name =>
    pipe(
      prop(name),
      checkPropType,
      ifElse(isNil, always('skip'), x => (x ? name : 'skip'))
    )(props_)

  const keyOrValueSingle = name =>
    pipe(
      prop(name),
      when(isNil, always('skip')),
      checkPropType,
      ifElse(isBool, x => (x ? name : 'skip'), x => [name, x])
    )(props_)

  const noSkip = pipe(join(' '), toCamelCase, x => ({ [x]: true }))
  const skipCond = contains('skip')
  const Skip = always({})

  const reduceSingle = arr =>
    reduce(
      (acc, v) => [...acc, ...toArray(keyOrValueSingle(v))],
      [],
      arr
    )

  const res = reduce(
    (acc, v) => {
      if (is('Array', v)) {
        const withValues = pipe(
          toArray,
          mapValues(keyOrValue),
          ifElse(skipCond, Skip, noSkip)
        )(v)
        const withKeys = pipe(
          toArray,
          mapValues(alwaysKey),
          ifElse(skipCond, Skip, noSkip),
          merge(withValues)
        )(v)
        return merge(acc, withKeys)
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
  return res
}
export default curryN(2, stylerCx)

// const p_ = {
//   variant: 'regular',
//   primary: true,
//   minimal: true,
//   size: 'small'
// }

// console.log(stylerCx(['size', 'variant', ['variant', 'primary'], ['primary', 'minimal']],p_))
