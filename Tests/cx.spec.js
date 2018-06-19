/**
 * @jest-environment node
 */
import stylerCx from '../src/stylerCx'
import stylerWithTheme from './utils/stylerWithTheme'

describe('stylerCx', () => {
  it('Works', () => {
    const p_ = {
      variant: 'regular',
      primary: true,
      minimal: true,
      size: 'small'
    }
    const a = stylerCx(
      ['size', 'variant', ['variant', 'primary'], ['primary', 'minimal']],
      p_
    )
    const b = stylerCx([['variant', 'primary', 'minimal']], p_)

    expect(a).toEqual({
      primaryMinimal: true,
      regularPrimary: true,
      sizeSmall: true,
      variantRegular: true
    })

    expect(b).toEqual({ regularPrimaryMinimal: true })
  })

  it('Works with responsive propValues', () => {
    const p_ = {
      variant: { sm: 'regular', md: 'fine' },
      primary: true,
      minimal: true,
      size: 'small'
    }
    const a = stylerCx(
      ['size', 'variant', ['variant', 'primary'], ['primary', 'minimal']],
      p_
    )
    const b = stylerCx(
      [['primary', 'minimal'], ['variant', 'primary', 'minimal']],
      p_
    )

    expect(a).toEqual({
      primaryMinimal: true,
      sizeSmall: true,
      variant: { md: 'fine', sm: 'regular' }
    })

    expect(b).toEqual({
      primaryMinimal: true,
      variant: { md: 'fine', sm: 'regular' }
    })
  })

  describe('styler', () => {
    const options = {
      cx: [
        'variant',
        'primary',
        'outlined',
        ['variant', 'primary'],
        ['variant', 'outlined'],
        ['outlined', 'primary'],
        ['variant', 'outlined', 'primary']
      ]
    }
    test('With Styler Block Pattern Match global Options', () => {
      const stylesBlock = {
        color: {
          warningOutlinedPrimary: 'warningOutlinedPrimary',
          outlinedPrimary: 'outlinedPrimaryColor',
          successPrimary: 'successPrimaryColor',
          warningPrimary: 'warningPrimaryColor',
          successOutlined: 'successOutlinedColor',
          warningOutlined: 'warningOutlinedColor',
          primary: 'primaryColor',
          outlined: 'outlinedColor',
          variantRegular: 'variantColor'
        },
        options
      }
      const defaultProps = {
        variant: 'regular',
        outlined: false,
        primary: false
      }
      const variant = ['warning', 'success', 'regular']
      const a = stylerWithTheme(stylesBlock)(defaultProps)
      expect(a).toEqual({ color: 'variantColor' })
      const b = stylerWithTheme(stylesBlock)({
        ...defaultProps,
        outlined: true
      })
      expect(b).toEqual({ color: 'outlinedColor' })
      const c = stylerWithTheme(stylesBlock)({
        ...defaultProps,
        variant: 'warning',
        outlined: true
      })
      expect(c).toEqual({ color: 'warningOutlinedColor' })

      const d = stylerWithTheme(stylesBlock)({
        ...defaultProps,
        outlined: true,
        primary: true
      })
      expect(d).toEqual({ color: 'outlinedPrimaryColor' })
      const e = stylerWithTheme(stylesBlock)({
        ...defaultProps,
        variant: 'warning',
        outlined: true,
        primary: true
      })
      expect(e).toEqual({ color: 'warningOutlinedPrimary' })
    })

    test('With Styler Block Pattern Match global Options Responsive', () => {
      const stylesBlock = {
        color: {
          outlinedPrimary: 'outlinedPrimaryColor'
        },
        margin: {
          variant: 'returnAsIs'
        },
        options
      }

      const defaultProps = {
        variant: { mobile: '1px', tablet: '2px' },
        outlined: true,
        primary: true
      }
      const a = stylerWithTheme(stylesBlock)(defaultProps)
      expect(a).toEqual({
        '@media screen and (min-width:tablet)': { margin: '0.125rem' },
        color: 'outlinedPrimaryColor',
        margin: '0.063rem'
      })

      const stylesBlock2 = {
        color: {
          outlinedPrimary: 'outlinedPrimaryColor'
        },
        margin: {
          variantRegular: { mobile: '1px', tablet: '2px' }
        },
        options
      }
      const b = stylerWithTheme(stylesBlock)(defaultProps)
      expect(b).toEqual({
        '@media screen and (min-width:tablet)': { margin: '0.125rem' },
        color: 'outlinedPrimaryColor',
        margin: '0.063rem'
      })
    })
  })
})
