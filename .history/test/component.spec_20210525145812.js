import Dialog from '@/components/Dialog'
import { mount } from '@vue/test-utils'

describe('Dialog', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.vm).toBeTruthy()
  })
})
