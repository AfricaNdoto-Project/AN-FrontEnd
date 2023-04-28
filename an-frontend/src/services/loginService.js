import api from "./config";

const login = async (body) => {
  try {
    console.log('connecting...')
    //console.log(body)
    const {data} = await api.post('/auth/login', body)
    console.log(data)
    localStorage.setItem('token', data.token)
    return 200
  } catch (error) {
    return error.response.data
  }
}

export {
  login
}