import axios from 'axios'

export function fetchData () {
  console.log('fetchData')
  return axios.get('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json')
    .then(({ data }) => data)
}
