/**
 * @jest-environment node
 */

import stylerWithTheme from './utils/stylerWithTheme'
import * as styleDefs from '../src/styleDefs'

const tester = (title, styleDefs, props, expected) =>
  test(title, () => {
    expect(stylerWithTheme(styleDefs)(props)).toEqual(expected)
  })

describe('StylerDefs', () => {
  tester(
    'alignContent (Blank)',
    { alignContent: styleDefs.alignContent },
    {},
    {}
  )
  tester(
    'alignContent',
    { alignContent: styleDefs.alignContent },
    { alignContent: 'center' },
    { alignContent: 'center' }
  )

  describe('fontSize', () => {
    const fontSize = {
      fontSize: 'returnAsIs',
      f: 'returnAsIs',
      options: {
        getter: 'px',
        key: 'fontSizes'
      }
    }

    const fontSizeRem = {
      ...fontSize,
      options: {
        getter: 'pxToRem',
        key: 'fontSizes'
      }
    }

    tester(
      'Converts value to default Conversion',
      { fontSize },
      { fontSize: 1 },
      { fontSize: '1px' }
    )

    tester('Can use alias (f)', { fontSize }, { f: 1 }, { fontSize: '1px' })

    tester(
      'Looks Up value in Theme ',
      { fontSize },
      { f: 'sm' },
      { fontSize: '16px' }
    )

    tester(
      'Looks Up value in Theme and Converts ',
      { fontSize: fontSizeRem },
      { f: 'sm' },
      { fontSize: '1rem' }
    )
  })

  describe('Space Styles', () => {
    const spaceStyle = stylerWithTheme(styleDefs.space)
    test('Padding', () => {
      const a = spaceStyle({ p: '50%' })
      const b = spaceStyle({ p: 'md' })
      const c = spaceStyle({ p: 16 })

      expect(a).toEqual({ padding: '50%' })
      expect(b).toEqual({ padding: '1rem' })
      expect(c).toEqual({ padding: '1rem' })
    })
    test('Margin', () => {
      const a = spaceStyle({ m: '50%' })
      const b = spaceStyle({ m: 'md' })
      const c = spaceStyle({ m: 16 })

      expect(a).toEqual({ margin: '50%' })
      expect(b).toEqual({ margin: '1rem' })
      expect(c).toEqual({ margin: '1rem' })
    })

    test('PaddingLeft', () => {
      const a = spaceStyle({ pl: '50%' })
      const b = spaceStyle({ pl: 'md' })
      const c = spaceStyle({ pl: 16 })
      expect(a).toEqual({ paddingLeft: '50%' })
      expect(b).toEqual({ paddingLeft: '1rem' })
      expect(c).toEqual({ paddingLeft: '1rem' })
    })
    test('PaddingX', () => {
      const a = spaceStyle({ px: '50%' })
      const b = spaceStyle({ px: 'md' })
      const c = spaceStyle({ px: 16 })
      expect(a).toEqual({ paddingLeft: '50%', paddingRight: '50%' })
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

    test('PaddingResponsive2', () => {
      const a = spaceStyle({
        px: { tabletSm: 'md', tablet: 'md', laptop: 'sm', desktop: 'sm' }
      })

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
        '@media screen and (min-width:tabletSm)': {
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }
      }

      expect(a).toEqual(result)
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
