// import Index from '@/pages/index'
// import Logo from '@/components/Logo'
import Home from '@/pages/Home'
import { mount, shallowMount } from '@vue/test-utils'

describe('Home', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    const wrapper2 = shallowMount(Home)
    // expect(wrapper.vm).toBeTruthy()
    console.log('wrapper', wrapper.html())
    console.log('wrapper2', wrapper2.html())
  })
})
