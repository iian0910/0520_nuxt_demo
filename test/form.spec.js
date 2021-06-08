import Form from '@/pages/form'
import { createLocalVue, mount } from '@vue/test-utils'
import ElementUI from 'element-ui'
import flushPromises from 'flush-promises'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

const localVue = createLocalVue()
localVue.component('ValidationProvider', ValidationProvider)
localVue.component('ValidationObserver', ValidationObserver)
localVue.use(ElementUI)

extend('required', {
  ...required,
  message: '此欄位為必填'
})

// const filtro = {
//   dtInicial: new Date()
// }

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

  // Vee-Validate 元件測試
  it('validate', async () => {
    const wrapper = mount(Form, { localVue })
    // console.log(wrapper.html())
    wrapper.find('.multiple-info input').setValue('')
    await flushPromises()
    const errorEl = wrapper.find('.error')
    expect(errorEl.text()).toBe('此欄位為必填')
  })
})
