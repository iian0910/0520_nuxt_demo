import Form from '@/pages/form'
import { createLocalVue, mount } from '@vue/test-utils'
import ElementUI from 'element-ui'
import flushPromises from 'flush-promises'
// import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
// import { required } from 'vee-validate/dist/rules'

const localVue = createLocalVue()
// localVue.component('ValidationProvider', ValidationProvider)
// localVue.component('ValidationObserver', ValidationObserver)
localVue.use(ElementUI)

// extend('required', {
//   ...required,
//   message: '此欄位為必填'
// })

// const filtro = {
//   dtInicial: new Date()
// }

jest.mock('axios')

describe('TEST !!', () => {
  // Input 元件測試
  // it('Input', async () => {
  //   const wrapper = mount(Form, localVue)
  //   await wrapper.find('.multiple-info .el-input__inner').setValue('HI')
  //   expect(wrapper.find('.multiple-info .el-input__inner').element.value)
  //     .toBe('HI')
  // })

  // Datepicker 元件測試
  // it('datepicker', async () => {
  //   const wrapper = mount(Form, localVue)
  //   const dtInicial = wrapper.find('.date-info .el-input__inner')
  //   await dtInicial.setValue(filtro.dtInicial)

  //   const receivedDate = new Date(dtInicial.element.value)
  //   const expectedDate = filtro.dtInicial
  //   expect(receivedDate.getFullYear() + '/' + (receivedDate.getMonth() + 1) + '/' + receivedDate.getDate())
  //     .toBe(expectedDate.getFullYear() + '/' + (expectedDate.getMonth() + 1) + '/' + expectedDate.getDate())
  // })

  // Checkbox 元件測試
  // it('checkbox', async () => {
  //   const wrapper = mount(Form, localVue)
  //   const elCheckbox = wrapper.find('.check-item input[type="checkbox"]')
  //   await elCheckbox.setChecked()
  //   expect(elCheckbox.element.checked).toBe(true)
  // })

  // filters: { } 功能測試案例 (製作類似 Angular 的 Pipe 功能)
  // it('test currency value transform', async () => {
  //   const wrapper = mount(Form, { localVue })
  //   // console.log(wrapper.html())
  //   await wrapper.find('.dollar input').setValue('1000')
  //   const dollar = wrapper.find('.show')
  //   expect(dollar.text()).toBe('1,000')
  // })

  // computed: { } 功能測試案例
  // it('computed value', async () => {
  //   const wrapper = mount(Form, { localVue })
  //   await wrapper.find('.plus-val-one input').setValue('1')
  //   await wrapper.find('.plus-val-two input').setValue('2')
  //   const dollar = wrapper.find('.show')
  //   expect(dollar.text()).toBe('3')
  // })

  // watch: { } 功能測試
  // it('watch value', async () => {
  //   const wrapper = mount(Form, { localVue })
  //   await wrapper.find('.member-accound input').setValue('a')
  //   const verificationResult = wrapper.find('.verificationResult')
  //   expect(verificationResult.text()).toBeTruthy()
  // })

  // watch: { } 功能測試，使用 toMatch()
  // it('watch value toMatch()', () => {
  //   const regexp = /^[A-Z]\d{9}$/
  //   const wrapper = mount(Form, { localVue })
  //   wrapper.find('.member-accound input').setValue('A123456789')
  //   const val = wrapper.find('.member-accound input').element.value
  //   expect(val).toMatch(regexp)
  // })

  // axios 功能測試
  it('fetches async when a button is clicked', async () => {
    const wrapper = mount(Form, { localVue })
    wrapper.find('button').trigger('click')
    await flushPromises()
    const showInfo = wrapper.find('.show')
    console.log(showInfo.element.value)
    // expect(wrapper.text()).toBeTruthy()
  })

  // Vee-Validate 元件測試
  // it('validate', async () => {
  //   const wrapper = mount(Form, { localVue })
  //   // console.log(wrapper.html())
  //   wrapper.find('.multiple-info input').setValue('')
  //   await flushPromises()
  //   const errorEl = wrapper.find('.error')
  //   expect(errorEl.text()).toBe('此欄位為必填')
  // })
})
