import Dialog from '@/components/Dialog'
import { mount } from '@vue/test-utils'

describe('Dialog', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Dialog)
    console.log('wrapper.vm', wrapper.vm)
    expect(wrapper.vm).toBeTruthy()
  })
})
