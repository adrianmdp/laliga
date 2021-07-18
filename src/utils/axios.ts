import axios from 'axios'

const api = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
})

api.defaults.headers.common['Content-Type'] = 'application/json'
api.defaults.headers.common.Accept = 'application/json'

export { api }
