import { shallowMount } from '@vue/test-utils'
import Logo from './Logo'

describe('Logo', () => {
  const createComponent = () => shallowMount(Logo)

  it('should not crash', () => {
    createComponent()

    expect(true).toBe(true)
  })

})