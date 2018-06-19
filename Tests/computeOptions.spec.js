/**
 * @jest-environment node
 */
import compute from '../src/computeOptions'

describe('ComputeOptions', () => {
  it('If Theme Key is empty, searches root', () => {
    const selector = 'color'
    const val = 'color_black'
    const options = { path: 'theme' }
    const props = {
      theme: {
        color_blue: 'blueColor',
        color_black: 'blackColor',
        colors: { blue: 'Themedblue' }
      }
    }

    const result = 'blackColor'
    expect(compute({ val, options, selector, props })).toEqual(result)
  })

  it('Key is empty, looks up default key based on selector', () => {
    const selector = 'color'
    const val = 'blue'
    const options = {}
    const props = {
      theme: {
        color_blue: 'blueColor',
        color_black: 'blackColor',
        colors: { blue: 'Themedblue' }
      }
    }

    const result = 'Themedblue'
    expect(compute({ val, options, selector, props })).toEqual(result)
  })

  it('Correctly Computes Negative attributes', () => {
    const selector = 'margin'
    const val = '-sm'
    const options = {}
    const props = {
      theme: {
        space: { sm: 16 }
      }
    }
    const result = '-1rem'
    expect(compute({ val, options, selector, props })).toEqual(result)
  })

  it('Fallsback To default Theme for lookup', () => {
    const selector = 'margin'
    const val = '-sm'
    const options = {}
    const props = {
      theme: {
        space: { lg: 16 }
      }
    }
    const result = '-0.5rem'
    expect(compute({ val, options, selector, props })).toEqual(result)
  })

  it('Looks up default getter by selector', () => {
    const selector = 'margin'
    const val = 16
    const options = {}
    const props = {
      theme: {
        space: { lg: 16 }
      }
    }
    const result = '1rem'
    expect(compute({ val, options, selector, props })).toEqual(result)
  })
})
