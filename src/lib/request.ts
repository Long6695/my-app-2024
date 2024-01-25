import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:5050',
})

export default request
