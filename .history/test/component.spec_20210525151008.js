import Step from '@/pages/step'
import { mount, shallowMount } from '@vue/test-utils'

describe('Step', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Step)
    const wrapper2 = shallowMount(Step)
    // expect(wrapper.vm).toBeTruthy()
    console.log('wrapper', wrapper.html())
    console.log('wrapper2', wrapper2.html())
  })
})
