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
        styler({
          testCSSProp: {
            contollerProp: returnAsIs
          }
        }),
        styler({
          testCSSProp2: {
            contollerProp: returnAsIs
          }
        })
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
})
