interface Data {
  name: '';
  tel: '';
  city: '';
  zip: '';
  area: '';
  address: ''
}

export const state = () => ({
  item: null
})

export const mutations = {
  saveItem (state:any, data:Data) {
    state.item = data
  },
  resetItem (state:any) {
    state.item = null
  }
}
