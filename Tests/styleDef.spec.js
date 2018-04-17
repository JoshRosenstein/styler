/**
 * @jest-environment node
 */

/**
 * @jest-environment node
 */

import stylerWithTheme from './utils/stylerWithTheme'
import * as Utils from '../src/utils'

import { styler, space, returnAsIs } from '../src'

const spaceStyle = stylerWithTheme(space)

describe('StylerDefs', () => {
  describe('Space Styles', () => {
    test('Padding', () => {
      const a = spaceStyle({ p: '10px' })
      const b = spaceStyle({ p: 'md' })
      const c = spaceStyle({ p: 16 })

      expect(a).toEqual({ padding: '10px' })
      expect(b).toEqual({ padding: '1rem' })
      expect(c).toEqual({ padding: '1rem' })
    })
    test('Margin', () => {
      const a = spaceStyle({ m: '10px' })
      const b = spaceStyle({ m: 'md' })
      const c = spaceStyle({ m: 16 })

      expect(a).toEqual({ margin: '10px' })
      expect(b).toEqual({ margin: '1rem' })
      expect(c).toEqual({ margin: '1rem' })
    })

    test('PaddingLeft', () => {
      const a = spaceStyle({ pl: '10px' })
      const b = spaceStyle({ pl: 'md' })
      const c = spaceStyle({ pl: 16 })
      expect(a).toEqual({ paddingLeft: '10px' })
      expect(b).toEqual({ paddingLeft: '1rem' })
      expect(c).toEqual({ paddingLeft: '1rem' })
    })
    test('PaddingX', () => {
      const a = spaceStyle({ px: '10px' })
      const b = spaceStyle({ px: 'md' })
      const c = spaceStyle({ px: 16 })
      expect(a).toEqual({ paddingLeft: '10px', paddingRight: '10px' })
      expect(b).toEqual({ paddingLeft: '1rem', paddingRight: '1rem' })
      expect(c).toEqual({ paddingLeft: '1rem', paddingRight: '1rem' })
    })

    test('PaddingResponsive', () => {
      const a = spaceStyle({
        px: { mobile: 'md', tablet: 'md', laptop: 'sm', desktop: 'sm' }
      })

      const b = spaceStyle({ px: ['md', 'md', 'sm', 'sm'] })
      const result = {
        '@media screen and (min-width:desktop)': {
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem'
        },
        '@media screen and (min-width:laptop)': {
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem'
        },
        '@media screen and (min-width:tablet)': {
          paddingLeft: '1rem',
          paddingRight: '1rem'
        },
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }

      expect(a).toEqual(result)
      expect(b).toEqual(result)
    })

    test('PaddingMarginResponsive', () => {
      const spacing = {
        mobile: 'md',
        tablet: 'md',
        laptop: 'sm',
        desktop: 'sm'
      }
      const a = spaceStyle({ px: spacing, my: spacing })
      const b = spaceStyle({
        px: ['md', 'md', 'sm', 'sm'],
        my: ['md', 'md', 'sm', 'sm']
      })
      const result = {
        '@media screen and (min-width:desktop)': {
          marginBottom: '0.5rem',
          marginTop: '0.5rem',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem'
        },
        '@media screen and (min-width:laptop)': {
          marginBottom: '0.5rem',
          marginTop: '0.5rem',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem'
        },
        '@media screen and (min-width:tablet)': {
          marginBottom: '1rem',
          marginTop: '1rem',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        },
        marginBottom: '1rem',
        marginTop: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }

      expect(a).toEqual(result)
      expect(b).toEqual(result)
    })
  })
})
