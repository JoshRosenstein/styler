/**
 * @jest-environment node
 */

import stylerWithTheme from './utils/stylerWithTheme'
import * as Utils from '../src/utils'
import { styler, space, returnAsIs } from '../src'

describe('Styler', () => {
  describe('Simple Match Boolean Execution', () => {
    const testStyler = styler({
      TestCSSProp: {
        red: 'red',
        blue: 'blue',
        default: 'white'
      }
    })
    it('It Should return result of first Match', () => {
      expect(testStyler({ red: true })).toEqual({ TestCSSProp: 'red' })
    })
    it('It Should return blue', () => {
      expect(testStyler({ blue: true })).toEqual({ TestCSSProp: 'blue' })
    })

    it('It Should return result of first Match with multiple matches', () => {
      expect(testStyler({ red: true, blue: true })).toEqual({
        TestCSSProp: 'red'
      })
    })
    it('It Should return default when no matches', () => {
      expect(testStyler({})).toEqual({ TestCSSProp: 'white' })
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

      const result1 = styler(rules1, props1)
      const result2 = styler(rules1, props2)
      const result3 = styler(rules2, props1)
      const result4 = styler(rules2, props2)
      expect(result1).toEqual(result2)
      expect(result3).toEqual(result4)
      expect(result1).not.toEqual(result3)
    })
  })

  describe('Functional Matches Execution', () => {
    const testStyler = styler({
      TestCSSProp: {
        addOne: v => v,
        returnPropValue: v => v,
        returnAsIs: returnAsIs,
        dependsOnOtherProp: (value, p) => p.otherProp,
        getThemeColor: (value, p) => Utils.getThemeAttr(`colors.${value}`)(p),
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
      const result = testBlock({ mode: 'hi there', nextOne: 'dodgerblue' })
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

    it('Can return propValue using Custom', () => {
      const testProps = {
        returnPropValue: 'ThisWillBeReturned'
      }
      const result = {
        TestCSSProp: 'ThisWillBeReturned'
      }
      expect(testStyler(testProps)).toEqual(result)
    })

    it('Can return propValue using returnAsIs', () => {
      const testProps = {
        returnAsIs: 'ThisWillBeReturned'
      }
      const result = {
        TestCSSProp: 'ThisWillBeReturned'
      }
      expect(testStyler(testProps)).toEqual(result)
    })

    it('Can reference other props', () => {
      const testProps = {
        dependsOnOtherProp: true,
        otherProp: 'blue'
      }
      const result = {
        TestCSSProp: 'blue'
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
        TestCSSProp: 'Themedblue'
      }
      expect(testStyler(testProps)).toEqual(result)
    })
  })

  describe('Styler accepts Functions Dependent on Props', () => {
    const ifFunction = ({ shouldExecute }) =>
      shouldExecute ? { testCssProp: 'returned' } : {}

    const testStyler = stylerWithTheme(ifFunction)

    expect(
      testStyler({
        shouldExecute: true
      })
    ).toEqual({
      testCssProp: 'returned'
    })
    expect(
      testStyler({
        shouldExecute: false
      })
    ).toEqual({})
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
      const testStyler = stylerWithTheme([
        {
          testCSSProp: 'returnThis'
        }
      ])

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
            contollerProp: returnAsIs
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

    it('Should lookup key Functions using "pxToRem" ', () => {
      const testStyler = stylerWithTheme({
        testCSSProp: {
          testProp: 'pxToRem',
          default: 'small'
        }
      })

      const testProps = {
        testProp: 16
      }

      expect(testStyler(testProps)).toEqual({
        testCSSProp: '1rem'
      })
    }),
      it('Should join Nested Selectors ', () => {
        const testStyler = stylerWithTheme({
          '>:first-child': {
            '>*': {
              debugMode: 1
            }
          }
        })

        const testProps = {
          testProp: 'thisShouldBeReturned'
        }
        // {">*": {"margin": 1}, ">:first-child": {}}
        expect(testStyler(testProps)).toEqual({
          '>:first-child >*': { debugMode: 1 }
        })
      })
  })

  describe('Strings on Matchers are responsive', () => {
    it('Should lookup key Functions using "returnAsIs" ', () => {
      // column: isObject ? 'returnAsIs' : 'column',
      const testStyler = stylerWithTheme({
        flexDirection: {
          flexDirection: 'returnAsIs',
          direction: 'returnAsIs',
          fxdirection: 'returnAsIs',
          row: 'row',
          column: 'column',
          rowReverse: 'row-reverse',
          columnReverse: 'column-reverse'
        }
      })

      const testProps = {
        column: { mobile: true, tablet: true },
        row: { mobile: true }
      }

      expect(testStyler(testProps)).toEqual({ flexDirection: 'row' })
    }),
      it('Should Works With Arrays', () => {
        // column: isObject ? 'returnAsIs' : 'column',
        const testStyler = stylerWithTheme({
          flexDirection: {
            flexDirection: 'returnAsIs',
            direction: 'returnAsIs',
            fxdirection: 'returnAsIs',
            row: 'row',
            column: 'column',
            rowReverse: 'row-reverse',
            columnReverse: 'column-reverse'
          }
        })

        const testProps = {
          column: [true, true]
        }

        expect(testStyler(testProps)).toEqual({
          '@media screen and (min-width:tablet)': { flexDirection: 'column' },
          flexDirection: 'column'
        })
      })
  })
})
