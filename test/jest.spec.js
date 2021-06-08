import Jest from '@/pages/jest'
import { shallowMount } from '@vue/test-utils'

describe('Jest測試', () => {
  // 因為 trigger 處理的是非同步的事件
  // 所以要搭配 async / await 來一同執行
  it('測試 message 是否被渲染出來', async () => {
    const wrapper = shallowMount(Jest)

    wrapper.find('[data-username]').setValue('alice')
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.find('.message').text())
      .toBe('Thank you for your submission, alice.')
  })

  it('測試是否有將 submitted 設為 true', async () => {
    const wrapper = shallowMount(Jest)

    wrapper.find('[data-username]').setValue('alice')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.vm.submitted).toBe(true)
  })
})
