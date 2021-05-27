// import Index from '@/pages/index'
// import Logo from '@/components/Logo'
import { mount } from '@vue/test-utils';

// mount        :渲染該元件及子層出來
// shallowMount :則只渲染該元件，不渲染子層
// describe('Home', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Home)
//     const wrapper2 = shallowMount(Home)
//     // expect(wrapper.vm).toBeTruthy()
//     console.log('wrapper', wrapper.html())
//     console.log('wrapper2', wrapper2.html())
//   })
// })
test("測試 props 資料_按鈕文字", () => {
  const propstext = "送出";
  const wrapperUserForm = mount(UserForm, {
    propsData: {
      text: "送出"
    }
  })
  expect(wrapperUserForm.find("button").text()).toBe(propstext);
})
