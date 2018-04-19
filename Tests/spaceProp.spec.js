/**
 * @jest-environment node
 */

import theme from './utils/theme'
import { spaceProp } from '../src'
import { UnflattenObj } from '../src/utils'

describe('SpaceProp', () => {
  it('Should return multiple MQs', () => {
    const testProps = { desktop: 'md', tablet: 'md', theme }

    expect(spaceProp('testProp')(testProps)).toEqual({
      '@media screen and (min-width:desktop)': { testProp: '1rem' },
      '@media screen and (min-width:tablet)': { testProp: '1rem' }
    })
  })

  it('Should return multiple MQs with multiple CSSPROPS', () => {
    const testProps = { desktop: 'md', tablet: 'md', theme }

    expect(spaceProp(['testProp', 'testProp2'])(testProps)).toEqual({
      '@media screen and (min-width:desktop)': {
        testProp: '1rem',
        testProp2: '1rem'
      },
      '@media screen and (min-width:tablet)': {
        testProp: '1rem',
        testProp2: '1rem'
      }
    })
  })

  it('Calculate CSSPROP if its a function', () => {
    const testProps = {
      isSwitched: true,
      desktop: 'md',
      tablet: 'md',
      theme
    }
    const testProps2 = {
      desktop: 'md',
      tablet: 'md',
      theme
    }

    const cssPropFromProp = ({ isSwitched }) =>
      isSwitched ? 'SwitchedCssProp' : 'NotSwitchedCssProp'
    expect(spaceProp(cssPropFromProp)(testProps)).toEqual({
      '@media screen and (min-width:desktop)': { SwitchedCssProp: '1rem' },
      '@media screen and (min-width:tablet)': { SwitchedCssProp: '1rem' }
    })

    expect(spaceProp(cssPropFromProp)(testProps2)).toEqual({
      '@media screen and (min-width:desktop)': { NotSwitchedCssProp: '1rem' },
      '@media screen and (min-width:tablet)': { NotSwitchedCssProp: '1rem' }
    })
  }),
    it('SpaceProp Allows CSS prop to be nested by Dot Notation" ', () => {
      const a = UnflattenObj(
        spaceProp('>:first-child.>*.margin')({
          desktop: 'md',
          tablet: 'md',
          theme
        })
      )

      const testProps = {
        testProp: 'thisShouldBeReturned'
      }
      // {">*": {"margin": 1}, ">:first-child": {}}
      expect(a).toEqual({
        '>:first-child >*': {
          '@media screen and (min-width:desktop)': { margin: 16 },
          '@media screen and (min-width:tablet)': { margin: 16 }
        }
      })
    }),
    it('SpaceProp Allows CSS prop to be nested by Dot Notation in Arrays" ', () => {
      const a = UnflattenObj(
        spaceProp(['>:first-child.>*.cssProp1', '>:first-child.>*.cssProp2'])({
          tablet: '2',
          theme
        })
      )

      const testProps = {
        testProp: 'thisShouldBeReturned'
      }
      // {">*": {"margin": 1}, ">:first-child": {}}
      expect(a).toEqual({
        '>:first-child >*': {
          '@media screen and (min-width:tablet)': {
            cssProp1: '2',
            cssProp2: '2'
          }
        }
      })
    })
})
