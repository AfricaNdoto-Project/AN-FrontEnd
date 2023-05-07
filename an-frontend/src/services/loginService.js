import api from "./config";

const login = async (body) => {
  try {
    console.log('connecting...')

    const { data } = await api.post('/auth/login', body)
    
    localStorage.setItem('token', data.token)
    localStorage.setItem('role', data.role)
    console.log(data)
    return 200
  } catch (error) {
    return error.response.data
  }
}

export {
  login
}