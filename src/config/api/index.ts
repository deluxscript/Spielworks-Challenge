import axios from 'axios'

const API = axios.create({
   baseURL: 'https://wax.api.atomicassets.io',
   headers: {
      "Content-type": "application/json"
    }
})

export default API