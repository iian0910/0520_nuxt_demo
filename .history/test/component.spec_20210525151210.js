// import Index from '@/pages/index'
import Logo from '@/components/Logo'
import { mount, shallowMount } from '@vue/test-utils'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    const wrapper2 = shallowMount(Logo)
    // expect(wrapper.vm).toBeTruthy()
    console.log('wrapper', wrapper.html())
    console.log('wrapper2', wrapper2.html())
  })
})
