import Dialog from '@/components/Dialog'
import { mount, shallowMount } from '@vue/test-utils'

describe('Dialog', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Dialog)
    const wrapper2 = shallowMount(Dialog)
    // expect(wrapper.vm).toBeTruthy()
    console.log('wrapper', wrapper.html())
    console.log('wrapper2', wrapper2.html())
  })
})
