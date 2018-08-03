/**
 * @jest-environment node
 */
import toMq from '../src/toMq'


describe('toMq', () => {
  it('Works', () => {

    expect(toMq({min:'200px'})).toEqual('@media (min-width:200px)')
    expect(toMq([{min:'100px'},{min:'200px',max:'200px'}])).toEqual('@media (min-width:100px), (min-width:200px) and (max-width:200px)')
  })

})
