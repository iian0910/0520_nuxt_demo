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
  saveItem (state, data:Data) {
    state.item = data
  },
  resetItem (state) {
    state.item = null
  }
}
