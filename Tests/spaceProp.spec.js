/**
 * @jest-environment node
 */

/**
 * @jest-environment node
 */

import theme from './utils/theme'
import { spaceProp } from '../src'

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
  })
})
