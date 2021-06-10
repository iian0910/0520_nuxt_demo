import Home from '@/pages/home'
import { mount, shallowMount } from '@vue/test-utils'

// mount(參數1, 參數2)        : 渲染該元件及子層出來
// shallowMount(參數1, 參數2) : 則只渲染該元件，不渲染子層 <子層會被 stub 封裝>

// (參數1為 Component 名稱，參數2為「選填」可參照下列網址)
// https://vue-test-utils.vuejs.org/api/options.html

describe('MOUNT AND SHALLOWMOUNT', () => {
  test('mount test', () => {
    const wrapper = mount(Home)
    expect(wrapper.vm).toBeTruthy()
  })

  test('shallowMount test', () => {
    const wrapper2 = shallowMount(Home)
    expect(wrapper2.vm).toBeTruthy()
  })
})
