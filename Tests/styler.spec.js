/**
 * @jest-environment node
 */

import stylerWithTheme from './utils/stylerWithTheme'
import { styler, getThemeAttr } from '../src'

const StylerEq = ({ args, props, result }) => {
  expect(styler(args)(props)).toEqual(result)
}

const StylerTest = (Name, args) =>
  it(Name, () => {
    StylerEq(args)
  })

const StylerWithThemeEq = ({ args, props, result }) => {
  expect(stylerWithTheme(args)(props)).toEqual(result)
}

const StylerWithThemeTest = (Name, args) =>
  it(Name, () => {
    StylerWithThemeEq(args)
  })

describe('Styler', () => {
  describe('Simple Match Boolean Execution', () => {
    const testStyler = styler({
      testCSSProp: {
        red: 'red',
        blue: 'blue',
        default: 'white'
      }
    })
    it('It Should return result of first Match', () => {
      expect(testStyler({ red: true })).toEqual({ testCSSProp: 'red' })
    })
    it('It Should return blue', () => {
      expect(testStyler({ blue: true })).toEqual({ testCSSProp: 'blue' })
    })

    it('It Should return result of first Match with multiple matches', () => {
      expect(testStyler({ red: true, blue: true })).toEqual({
        testCSSProp: 'red'
      })
    })
    it('It Should return default when no matches', () => {
      expect(testStyler({})).toEqual({ testCSSProp: 'white' })
    })
    it('Should not depend on prop order', () => {
      const topSelector = '#meow'
      const props1 = { mode: 'dark', nextOne: 'hello' }
      const props2 = { nextOne: 'hello', mode: 'dark' }
      const rules1 = {
        color: {
          mode: value => value === 'dark' && 'navy',
          nextOne: 'purple',
          default: 'green'
        }
      }
      const rules2 = {
        color: {
          nextOne: 'purple',
          mode: value => value === 'dark' && 'navy',
          default: 'green'
        }
      }

      const result1 = styler(rules1)(props1)
      const result2 = styler(rules1)(props2)
      const result3 = styler(rules2)(props1)
      const result4 = styler(rules2)(props2)
      expect(result1).toEqual(result2)
      expect(result3).toEqual(result4)
      expect(result1).not.toEqual(result3)
    })
  })

  describe('Functional Matches Execution', () => {
    const testStyler = styler({
      testCSSProp: {
        addOne: v => v,
        returnPropValue: v => v,
        returnAsIs: 'returnAsIs',
        dependsOnOtherProp: (value, p) => p.otherProp,
        getThemeColor: (value, p) => getThemeAttr(`colors.${value}`)(p),
        default: 'white'
      }
    })

    it('will render a block of styles for a block pattern', () => {
      const testBlock = styler({
        __match: {
          mode: {
            fontWeight: 'bold',
            color: 'purple'
          },
          nextOne: value => ({
            color: value,
            border: '1px solid #ccc'
          })
        }
      })
      const result = testBlock({ nextOne: 'dodgerblue', mode: 'hi there' })
      expect(result).toEqual({
        border: '1px solid #ccc',
        color: 'dodgerblue',
        fontWeight: 'bold'
      })
    })

    it('will merge block of styles for a block pattern correctly', () => {
      const testBlock = styler({
        cursor: 'pointer',
        display: 'inline-block',
        minHeight: '1em',
        outline: 'none',
        border: 'none',
        __match: {
          mode: {
            fontWeight: 'bold',
            color: 'purple'
          },
          nextOne: value => ({
            color: value,
            border: '1px solid #ccc'
          })
        }
      })
      const result = testBlock({ nextOne: 'dodgerblue', mode: 'hi there' })
      expect(result).toEqual({
        border: '1px solid #ccc',
        color: 'dodgerblue',
        cursor: 'pointer',
        display: 'inline-block',
        fontWeight: 'bold',
        minHeight: '1em',
        outline: 'none'
      })
    })
    it('block pattern does not return false bool matches', () => {
      const testBlock = styler({
        __match: {
          isActive: {
            fontWeight: 'bold',
            color: 'purple'
          }
        }
      })
      const result = testBlock({ isActive: true })
      expect(testBlock({ isActive: true })).toEqual({
        color: 'purple',
        fontWeight: 'bold'
      })
      expect(testBlock({ isActive: false })).toEqual({})
    })
    it('Can return propValue using Custom', () => {
      const testProps = {
        returnPropValue: 'ThisWillBeReturned'
      }
      const result = {
        testCSSProp: 'ThisWillBeReturned'
      }
      expect(testStyler(testProps)).toEqual(result)
    })

    it('Can return propValue using returnAsIs', () => {
      const testProps = {
        returnAsIs: 'ThisWillBeReturned'
      }
      const result = {
        testCSSProp: 'ThisWillBeReturned'
      }
      expect(testStyler(testProps)).toEqual(result)
    })

    it('Can reference other props', () => {
      const testProps = {
        dependsOnOtherProp: true,
        otherProp: 'blue'
      }
      const result = {
        testCSSProp: 'blue'
      }
      expect(testStyler(testProps)).toEqual(result)
    })
    it('Can use getThemeAttr', () => {
      const testProps = {
        getThemeColor: 'blue',
        theme: {
          colors: { blue: 'Themedblue' }
        }
      }
      const result = {
        testCSSProp: 'Themedblue'
      }
      expect(testStyler(testProps)).toEqual(result)
    })
  })

  describe('Styler accepts Functions Dependent on Props', () => {
    const ifFunction = ({ shouldExecute }) =>
      shouldExecute ? { testCSSProp: 'returned' } : {}

    const testStyler = stylerWithTheme(ifFunction)
    it('Works ', () => {
      expect(
        testStyler({
          shouldExecute: true
        })
      ).toEqual({
        testCSSProp: 'returned'
      })
      expect(
        testStyler({
          shouldExecute: false
        })
      ).toEqual({})
    })
  })
  describe('DEFAULT_RULE_KEY_LOOKUP', () => {
    it('Autolooks for key in theme if Rule has a default Key ', () => {
      const testStyler = stylerWithTheme({
        margin: {
          default: 'small'
        }
      })
      const testProps = {
        theme: {
          space: { small: 'returnThis' }
        }
      }
      const result = {
        margin: 'returnThis'
      }
      expect(testStyler(testProps)).toEqual(result)
    })
    it('Only Works when inside object', () => {
      const testStyler = stylerWithTheme({
        margin: 'small'
      })
      const testProps = {
        theme: {
          space: { small: 'returnThis' }
        }
      }
      const result = {
        margin: 'small'
      }
      expect(testStyler(testProps)).toEqual(result)
    })
  })

  describe('Can accept Arrays', () => {
    it('Should execute if a Single Array Objects', () => {
      const testStyler = stylerWithTheme({
        testCSSProp: 'returnThis'
      })

      expect(testStyler({})).toEqual({
        testCSSProp: 'returnThis'
      })
    })

    it('Should execute if a Multiple Array Objects', () => {
      const testStyler = stylerWithTheme([
        {
          testCSSProp: 'returnThis'
        },
        {
          testCSSProp2: 'returnThis'
        }
      ])

      expect(testStyler({})).toEqual({
        testCSSProp: 'returnThis',
        testCSSProp2: 'returnThis'
      })
    })
    it('Should execute if a Single Array Nested Styler Function', () => {
      const testStyler = stylerWithTheme(
        styler({
          testCSSProp: 'returnThis'
        })
      )

      expect(testStyler({})).toEqual({
        testCSSProp: 'returnThis'
      })
    })

    it('Should execute if Multiple Array Nested Styler Functions', () => {
      const testStyler = stylerWithTheme([
        styler({
          testCSSProp: 'returnThis'
        }),
        styler({
          testCSSProp2: 'returnThis'
        })
      ])

      expect(testStyler({})).toEqual({
        testCSSProp: 'returnThis',
        testCSSProp2: 'returnThis'
      })
    })

    it('Should Properly Merge Nested Selectors', () => {
      const testStyler = stylerWithTheme([
        {
          testCSSProp: {
            contollerProp: 'returnAsIs'
          }
        },
        {
          testCSSProp2: {
            contollerProp: 'returnAsIs'
          }
        }
      ])

      const testProps = { contollerProp: { tablet: 'tabletValue' } }

      expect(testStyler(testProps)).toEqual({
        '@media screen and (min-width:tablet)': {
          testCSSProp: 'tabletValue',
          testCSSProp2: 'tabletValue'
        }
      })
    })
  })

  describe('Call built function by passing string to matcher', () => {
    it('Should lookup key Functions using "returnAsIs" ', () => {
      const testStyler = stylerWithTheme({
        testCSSProp: {
          testProp: 'returnAsIs',
          default: 'small'
        }
      })

      const testProps = {
        testProp: 'thisShouldBeReturned'
      }

      expect(testStyler(testProps)).toEqual({
        testCSSProp: 'thisShouldBeReturned'
      })
    })

    it('Should lookup key Functions using "identity" ', () => {
      const testStyler = stylerWithTheme({
        testCSSProp: {
          testProp: 'identity',
          default: 'small'
        }
      })

      const testProps = {
        testProp: 'thisShouldBeReturned'
      }

      expect(testStyler(testProps)).toEqual({
        testCSSProp: 'thisShouldBeReturned'
      })
    })

    it('Should lookup key Functions using "propValue" ', () => {
      const testStyler = stylerWithTheme({
        testCSSProp: {
          testProp: 'propValue',
          default: 'small'
        }
      })

      const testProps = {
        testProp: 'thisShouldBeReturned'
      }

      expect(testStyler(testProps)).toEqual({
        testCSSProp: 'thisShouldBeReturned'
      })
    })

    it('Should lookup key Functions using "self" ', () => {
      const testStyler = stylerWithTheme({
        testCSSProp: {
          testProp: 'self',
          default: 'small'
        }
      })

      const testProps = {
        testProp: 'thisShouldBeReturned'
      }

      expect(testStyler(testProps)).toEqual({
        testCSSProp: 'thisShouldBeReturned'
      })
    })

    StylerTest('Should lookup key Functions using "pxToRem"', {
      args: {
        testCSSProp: {
          testProp: 'pxToRem',
          default: 'small'
        }
      },
      props: {
        testProp: 16
      },
      result: {
        testCSSProp: '1rem'
      }
    })

    StylerTest('Should join Nested Selectors', {
      args: {
        '>:first-child': {
          '>*': {
            cssProp: 1
          }
        }
      },
      props: {
        column: { mobile: true, tablet: true },
        row: { mobile: true }
      },
      result: {
        '>:first-child >*': { cssProp: 1 }
      }
    })
  })

  describe('Strings on Matchers are responsive', () => {
    StylerTest('Should lookup key Functions using "returnAsIs', {
      args: {
        flexDirection: {
          flexDirection: 'returnAsIs',
          direction: 'returnAsIs',
          fxdirection: 'returnAsIs',
          row: 'row',
          column: 'column',
          rowReverse: 'row-reverse',
          columnReverse: 'column-reverse'
        }
      },
      props: {
        column: { mobile: true, tablet: true },
        row: { mobile: true }
      },
      result: { flexDirection: 'row' }
    })

    StylerWithThemeTest('Should Works With Arrays', {
      args: {
        flexDirection: {
          flexDirection: 'returnAsIs',
          direction: 'returnAsIs',
          fxdirection: 'returnAsIs',
          row: 'row',
          column: 'column',
          rowReverse: 'row-reverse',
          columnReverse: 'column-reverse'
        }
      },
      props: {
        column: [true, true]
      },
      result: {
        '@media screen and (min-width:tablet)': { flexDirection: 'column' },
        flexDirection: 'column'
      }
    })
  })

  describe('Default Options', () => {
    StylerTest('It Should return default unit for margin', {
      args: { margin: 1 },
      props: {},
      result: { margin: '1px' }
    })
    StylerTest('It Should return default unit For animationDelay', {
      args: { animationDelay: 1 },
      props: {},
      result: {
        animationDelay: '1ms'
      }
    })
  })

  describe('Deeply Nested', () => {
    StylerTest('Nested inline Pattern within Block Pattern', {
      args: {
        __match: {
          variant: v => ({
            backgroundColor: {
              minimal: 'transparent',
              disabled: 'bg_disabled',
              main: v !== 'regular' ? `${v}D1` : 'blueD1',
              default: 'grayL4'
            },
            color: {
              disabled: 'gray',
              minimal: v !== 'regular' ? `${v}D1` : 'blueD1',
              main: 'white',
              default: v !== 'regular' ? `${v}D1` : 'grayD5'
            }
          })
        },

        '&:hover': {
          backgroundColor: {
            minimal: 'transparent',
            disabled: 'bg_disabled',
            main: (v, { variant }) =>
              variant !== 'regular' ? `${variant}D1` : 'blueD1',
            default: 'grayL4'
          }
        }
      },
      props: { variant: 'blue' },
      result: {
        '&:hover': { backgroundColor: 'grayL4' },
        backgroundColor: 'grayL4',
        color: 'blueD1'
      }
    })

    StylerTest('correctly reformats Result', {
      args: {
        '@media only screen and (max-width: 700px)': {
          '&:hover': { margin: '1px', color: 'red' }
        },
        '&:hover': {
          '@media only screen and (max-width: 700px)': {
            color: 'blue',
            '': { test: 'hey' }
          }
        }
      },
      props: {},
      result: {
        '@media only screen and (max-width: 700px)': {
          '&:hover': { color: 'blue', margin: '1px', test: 'hey' }
        }
      }
    })
  })

  describe('ComputeOptions', () => {
    StylerTest('If Theme Key is empty, searches root', {
      args: {
        options: { path: 'theme' },
        color: {
          color: v => `color_${v}`
        }
      },
      props: {
        color: 'black',
        theme: {
          color_blue: 'blueColor',
          color_black: 'blackColor',
          colors: { blue: 'Themedblue' }
        }
      },
      result: { color: 'blackColor' }
    })

    StylerTest('Correctly Returns Negatives', {
      args: {
        marginTop: {
          default: '-.5rem'
        }
      },
      props: {},
      result: { marginTop: '-.5rem' }
    }),
    StylerWithThemeTest('MQ pattern match', {
      args: {
        mq_mobile: {
          test: 1
        }
      },
      props: {},
      result: { '@media screen and (min-width:mobile)': { test: 1 } }
    })
  })

  describe('Reference Props by Template', () => {
    StylerTest('TemplateReference', {
      args: { marginTop: '{!margin}' },
      props: { margin: '1px' },
      result: { marginTop: '1px' }
    })

    StylerTest('Nested TemplateReference', {
      args: { marginTop: '{!theme.margin}' },
      props: { theme: { margin: '1px' } },
      result: { marginTop: '1px' }
    })

    StylerTest('Within Block Match', {
      args: { marginTop: { default: '{!theme.margin}' } },
      props: { theme: { margin: 16 } },
      result: { marginTop: '1rem' }
    })

    StylerTest('Multiple Templates', {
      args: {
        border:
          '{!theme.borderWidth}px {!theme.borderStyle} {!theme.borderColor}'
      },
      props: {
        theme: {
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'blue'
        }
      },
      result: { border: '1px solid blue' }
    })

    StylerTest('Multiple Block Match', {
      args: {
        border: {
          default:
            '{!theme.borderWidth}px {!theme.borderStyle} {!theme.borderColor}'
        }
      },
      props: {
        theme: {
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'blue'
        }
      },
      result: { border: '1px solid blue' }
    })
  })
  describe('Turn Off Default Getters and Lookups', () => {
    StylerTest('Doesnt Compute Global', {
      args: {
        options: {
          defaultTransform: false,
          defaultLookup: false
        },
        marginBottom: { default: '1px' },
        marginTop: { default: 'sm' }
      },
      props: { theme: { margin: '1px' } },
      result: { marginBottom: '1px', marginTop: 'sm' }
    })

    StylerTest('Doesnt Compute Local', {
      args: {
        marginBottom: {
          default: '1px',
          options: {
            defaultTransform: false,
            defaultLookup: false
          }
        },
        marginTop: {
          default: 'sm',
          options: {
            defaultTransform: false,
            defaultLookup: false
          }
        }
      },
      props: { theme: { margin: '1px' } },
      result: { marginBottom: '1px', marginTop: 'sm' }
    })
  })
})
