/// from https://github.com/threepointone/glam

const prefixedPseudoSelectors = {
  '::placeholder': [
    '::-webkit-input-placeholder',
    '::-moz-placeholder',
    '::-ms-input-placeholder'
  ],
  ':fullscreen': [
    ':-webkit-full-screen',
    ':-moz-full-screen',
    ':-ms-fullscreen'
  ]
}

function splitSelector(selector) {
  if (selector.indexOf(',') === -1) {
    return [selector]
  }

  var indices = [],
    res = [],
    inParen = 0,
    o
  /* eslint-disable no-cond-assign */
  while ((o = selectorTokenizer.exec(selector))) {
    /* eslint-enable no-cond-assign */
    switch (o[0]) {
      case '(':
        inParen++
        break
      case ')':
        inParen--
        break
      case ',':
        if (inParen) break
        indices.push(o.index)
    }
  }
  for (o = indices.length; o--; ) {
    res.unshift(selector.slice(indices[o] + 1))
    selector = selector.slice(0, indices[o])
  }
  res.unshift(selector)
  return res
}

function joinSelectors(a, b) {
  let as = splitSelector(a).map(a => (!(a.indexOf('&') >= 0) ? '&' + a : a))
  let bs = splitSelector(b).map(b => (!(b.indexOf('&') >= 0) ? '&' + b : b))

  return bs
    .reduce((arr, b) => arr.concat(as.map(a => b.replace(/\&/g, a))), [])
    .join(',')
}

function joinMediaQueries(a, b) {
  return a ? `@media ${a.substring(6)} and ${b.substring(6)}` : b
}

function isMediaQuery(key) {
  return key.indexOf('@media') === 0
}

function isSupports(key) {
  return key.indexOf('@supports') === 0
}

function joinSupports(a, b) {
  return a ? `@supports ${a.substring(9)} and ${b.substring(9)}` : b
}

function isSelector(key) {
  let possibles = [':', '.', '[', '>', ' '],
    found = false,
    ch = key.charAt(0)
  for (let i = 0; i < possibles.length; i++) {
    if (ch === possibles[i]) {
      found = true
      break
    }
  }
  return found || key.indexOf('&') >= 0
}

function construct_(dest, { selector = '', mq = '', supp = '', inputs = {} }) {
  const inputArray = !Array.isArray(inputs) ? [inputs] : flatten(inputs)

  inputArray.filter(x => !!x).forEach(input => {
    const src = input

    Object.keys(src || {}).forEach(key => {
      if (isSelector(key)) {
        // todo - regex test the string to look for prefixedpseudos
        if (prefixedPseudoSelectors[key]) {
          prefixedPseudoSelectors[key].forEach(p =>
            construct_(dest, {
              selector: joinSelectors(selector, p),
              mq,
              supp,
              inputs: src[key]
            })
          )
        }
        construct_(dest, {
          selector: joinSelectors(selector, key),
          mq,
          supp,
          inputs: src[key]
        })
      } else if (isMediaQuery(key)) {
        construct_(dest, {
          selector,
          mq: joinMediaQueries(mq, key),
          supp,
          inputs: src[key]
        })
      } else if (isSupports(key)) {
        construct_(dest, {
          selector,
          mq,
          supp: joinSupports(supp, key),
          inputs: src[key]
        })
      } else {
        let _dest = dest
        if (supp) {
          _dest[supp] = _dest[supp] || {}
          _dest = _dest[supp]
        }
        if (mq) {
          _dest[mq] = _dest[mq] || {}
          _dest = _dest[mq]
        }
        if (selector) {
          _dest[selector] = _dest[selector] || {}
          _dest = _dest[selector]
        }

        if (key === 'label') {
          if (hasLabels) {
            // concat at root of object
            dest.label = dest.label.concat(src.label)
          }
        } else {
          _dest[key] = src[key]
        }
      }
    })
  })

  return dest
}

// construct_(
//   { label: [] },
//   {
//     inputs: {
//       color: 'red',
//       ':hover': {
//         color: 'blue'
//       },
//       '@media screen': {
//         color: 'green'
//       }
//     }
//   }
// )
