import {
  toArray,
  pipe,
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

const camelCase = str =>
  str
    .split(
      /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/
    )
    .reduce((res, word, i) => word === ''
      ? res
      : res.concat(
        i > 0 ? word[0].toUpperCase() : word[0].toLowerCase(),
        word.slice(1)
      ), '')

const stylerCx = (prefix, props_) => {
  const isBool = is('Boolean')
  const collectObjProps = {}
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

  const alwaysKey = name =>
    pipe(
      prop(name),
      checkPropType(name),
      ifElse(isNil, always('skip'), x => (x ? name : 'skip'))
    )(props_)

  const keyOrValueSingle = name =>
    pipe(
      prop(name),
      when(isNil, always('skip')),
      checkPropType(name),
      ifElse(isBool, x => (x ? name : 'skip'), x => [name, x])
    )(props_)

  const noSkip = pipe(join(' '), camelCase, x => ({ [x]: true }))
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
          map(keyOrValue),
          ifElse(skipCond, Skip, noSkip)
        )(v)
        const withKeys = pipe(
          toArray,
          map(alwaysKey),
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
