import axios from 'axios'

const api = axios.create({
  //baseURL: 'https://africandotodb.up.railway.app/api',
  //baseURL: 'http://localhost:3000/api',
  baseURL: 'https://africandoto.onrender.com/api'
})

export default api
