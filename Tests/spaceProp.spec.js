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
      isSwitched ? 'switchedCssProp' : 'notSwitchedCssProp'
    expect(spaceProp(cssPropFromProp)(testProps)).toEqual({
      '@media screen and (min-width:desktop)': { switchedCssProp: '1rem' },
      '@media screen and (min-width:tablet)': { switchedCssProp: '1rem' }
    })

    expect(spaceProp(cssPropFromProp)(testProps2)).toEqual({
      '@media screen and (min-width:desktop)': { notSwitchedCssProp: '1rem' },
      '@media screen and (min-width:tablet)': { notSwitchedCssProp: '1rem' }
    })
  })

  it('SpaceProp Allows CSS prop to be nested by Dot Notation" ', () => {
    const a = spaceProp('>:first-child.>*.margin')({
      desktop: 'md',
      tablet: 'md',
      theme
    })

    // {">*": {"margin": 1}, ">:first-child": {}}
    expect(a).toEqual({
      '@media screen and (min-width:desktop)': {
        '>:first-child >*': { margin: '1rem' }
      },
      '@media screen and (min-width:tablet)': {
        '>:first-child >*': { margin: '1rem' }
      }
    })
  })
  
  it('SpaceProp Allows CSS prop to be nested by Dot Notation in Arrays" ', () => {
    const a = spaceProp([
      '>:first-child.>*.cssProp1',
      '>:first-child.>*.cssProp2'
    ])({
      tablet: '2rem',
      theme
    })

    expect(a).toEqual({
      '@media screen and (min-width:tablet)': {
        '>:first-child >*': { cssProp1: '2rem', cssProp2: '2rem' }
      }
    })
  })
})
