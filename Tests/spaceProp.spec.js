/**
 * @jest-environment node
 */

/**
 * @jest-environment node
 */

import theme from './utils/theme'
import { spaceProp } from '../src'

describe('StylerDefs', () => {
  describe('Space Styles', () => {
    it('Should Work', () => {
      const testProps = { desktop: 'md', tablet: 'md', theme }

      expect(spaceProp('testProp')(testProps)).toEqual({
        '@media screen and (min-width:desktop)': { testProp: '1rem' },
        '@media screen and (min-width:tablet)': { testProp: '1rem' }
      })
    })
  })
})
