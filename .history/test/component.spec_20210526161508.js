// import Home from '@/pages/Home'
// import Logo from '@/components/Logo'
import UserForm from '@/components/UserForm.vue'
import { mount } from '@vue/test-utils'

// mount(參數1, 參數2)        : 渲染該元件及子層出來(第一參數為 Component 名稱，第二參數為「選填」可參照下列網址)
// https://vue-test-utils.vuejs.org/api/options.html

// shallowMount(參數1, 參數2) :則只渲染該元件，不渲染子層 <子層會被 stub 封裝>

// describe('TEST MOUNT AND SHALLOWMOUNT', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Home)
//     const wrapper2 = shallowMount(Home)
//     // expect(wrapper.vm).toBeTruthy()
//     console.log('MOUNT', wrapper.html())
//     console.log('SHALLOWMOUNT', wrapper2.html())
//   })
// })

describe('TEST MOUNT AND GOT CURRENT TEXT', () => {
  test('測試 props 資料_按鈕文字', () => {
    const propstext = '送出'
    const wrapperUserForm = mount(UserForm, {
      propsData: {
        text: '送出'
      }
    })
    console.log('wrapperUserForm', wrapperUserForm)
    console.log('btnText', wrapperUserForm.find('button').text())
    // VueWrapper {
    //   isFunctionalComponent: undefined,
    //   _emitted: [Object: null prototype] {},
    //   _emittedByOrder: []
    // }
    expect(wrapperUserForm.find('button').text()).toBe(propstext)
  })
})
