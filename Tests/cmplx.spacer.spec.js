/**
 * @jest-environment node
 */

import { equals, complement, test } from '@roseys/futils'
import { spaceProp, pxToRem } from '../src'

const SizeCss = p => {
  if (p.x === true && !p.y) return ['minWidth', 'width']
  if (!p.x && p.y === true) return ['minHeight', 'height']
  return ['minWidth', 'width', 'minHeight', 'height']
}

const MarginCss = p => {
  if (p.x === true && !p.y) return 'marginLeft'
  if (!p.x && p.y === true) return 'marginTop'
  return ['marginLeft', 'marginTop']
}

const isNotNeg = complement(test(/^-.+/))

const SpaceGetter = isSize => v =>
  isSize
    ? equals(0, v) ? 0 : isNotNeg(v) ? pxToRem(v) : null
    : equals(0, v) ? 0 : !isNotNeg(v) ? pxToRem(v) : null

describe('SpaceProp Space', () => {
  describe('with static features', () => {
    it('should add correct styles for default', () => {
      const a = spaceProp(SizeCss, SpaceGetter(true))({ mobile: 'sm' })

      expect(a).toEqual({
        height: '0.5rem',
        minHeight: '0.5rem',
        minWidth: '0.5rem',
        width: '0.5rem'
      })
    })
  })
})
