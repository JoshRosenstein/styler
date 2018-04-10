import styler from './styler'
import { pxToRem, returnAsIs, getThemeAttr } from './utils'
import defaultTheme from './defaultTheme'
import { space } from './styles'
const themeForTesting = {
  breakpoints: {
    mobile: 'mobile',
    tablet: 'tablet',
    laptop: 'laptop',
    desktop: 'desktop',

    mobileSm: 'mobileSm',
    mobileMd: 'mobileMd',
    mobileLg: 'mobileLg',

    tabletSm: 'tabletSm',
    tabletMd: 'tabletMd',
    tabletLg: 'tabletLg',

    laptopSm: 'laptopSm',
    laptopMd: 'laptopMd',
    laptopLg: 'laptopLg',

    desktopSm: 'desktopSm',
    desktopMd: 'desktopMd',
    desktopLg: 'desktopLg'
  },

  space: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 128
  },
  fontSizes: {
    xxs: 12,
    xs: 14,
    sm: 16,
    md: 20,
    lg: 20,
    xl: 24,
    xxl: 32
  },
  colors: {
    red: '#f5222d',
    vermilion: '#fa541c',
    orange: '#fa8c16',
    amber: '#faad14',
    yellow: '#fadb14',
    lime: '#a0d911',
    green: '#52c41a',
    teal: '#13c2c2',
    blue: '#1890ff',
    indigo: '#2f54eb',
    violet: '#5141DE',
    purple: '#722ed1',
    magenta: '#eb2f96',
    slate: '#6f9cb3',
    dusk: '#7781a6',
    blueGray: '#aeb9cb',
    lightGray: '#bfbfbf',
    gray: '#808080',
    darkGray: '#404040',
    nuetral: '#97a4a4'
  }
}

const spaceStyleDef = {
  options: {
    key: 'space',
    getter: pxToRem
  },
  padding: {
    padding: returnAsIs,
    p: returnAsIs
  },
  paddingLeft: {
    paddingLeft: returnAsIs,
    pl: returnAsIs,
    px: returnAsIs
  },
  paddingRight: {
    paddingRight: returnAsIs,
    pr: returnAsIs,
    px: returnAsIs
  },
  paddingTop: {
    paddingTop: returnAsIs,
    pt: returnAsIs,
    py: returnAsIs
  },
  paddingBottom: {
    paddingBottom: returnAsIs,
    pb: returnAsIs,
    py: returnAsIs
  },
  margin: {
    margin: returnAsIs,
    m: returnAsIs
  },
  marginLeft: {
    marginLeft: returnAsIs,
    ml: returnAsIs,
    mx: returnAsIs
  },
  marginRight: {
    marginRight: returnAsIs,
    mr: returnAsIs,
    mx: returnAsIs
  },
  marginTop: {
    marginTop: returnAsIs,
    mt: returnAsIs,
    my: returnAsIs
  },
  marginBottom: {
    marginBottom: returnAsIs,
    mb: returnAsIs,
    my: returnAsIs
  }
}

const spaceStyle = styler(spaceStyleDef)

const withTheme = v => ({ theme: themeForTesting, ...v })

describe('Styler', () => {
  test('getThemeAttr', () => {
    const a = getThemeAttr('breakpoints')({})
    const b = getThemeAttr('breakpoints')({
      theme: { breakpoints: { mobile: 'mobile' } }
    })
    expect(a).toEqual(defaultTheme.breakpoints)
    expect(b).toEqual({ mobile: 'mobile' })
  })

  test('StylerBool', () => {
    const backgroundStyler = styler({
      backgroundColor: {
        red: 'red',
        blue: 'blue',
        dependsOnOtherProp: (value, p) => p.otherProp,
        getThemeColor: (value, p) => getThemeAttr(`colors.${value}`)(p),
        default: 'white'
      }
    })

    const a = backgroundStyler({ red: true })
    const b = backgroundStyler({ blue: true })
    const c = backgroundStyler({ red: true, blue: true })
    const d = backgroundStyler({})
    const e = backgroundStyler({ dependsOnOtherProp: true, otherProp: 'blue' })
    const f = backgroundStyler({
      getThemeColor: 'blue',
      theme: { colors: { blue: 'Themedblue' } }
    })
    expect(a).toEqual({ backgroundColor: 'red' })
    expect(b).toEqual({ backgroundColor: 'blue' })
    expect(c).toEqual({ backgroundColor: 'red' })
    expect(d).toEqual({ backgroundColor: 'white' })
    expect(e).toEqual({ backgroundColor: 'blue' })
    expect(f).toEqual({ backgroundColor: 'Themedblue' })
  })

  test('Padding', () => {
    const a = spaceStyle(withTheme({ p: '10px' }))
    const b = spaceStyle({ p: 'md' })
    const c = spaceStyle({ p: 16 })

    expect(a).toEqual({ padding: '10px' })
    expect(b).toEqual({ padding: '1rem' })
    expect(c).toEqual({ padding: '1rem' })
  })
  test('Margin', () => {
    const a = spaceStyle(withTheme({ m: '10px' }))
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
    const a = spaceStyle(
      withTheme({
        px: { mobile: 'md', tablet: 'md', laptop: 'sm', desktop: 'sm' }
      })
    )
    const b = spaceStyle(withTheme({ px: ['md', 'md', 'sm', 'sm'] }))
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
    const spacing = { mobile: 'md', tablet: 'md', laptop: 'sm', desktop: 'sm' }
    const a = spaceStyle(withTheme({ px: spacing, my: spacing }))
    const b = spaceStyle(
      withTheme({ px: ['md', 'md', 'sm', 'sm'], my: ['md', 'md', 'sm', 'sm'] })
    )
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
