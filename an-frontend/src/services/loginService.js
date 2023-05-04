import api from "./config";

const login = async (body) => {
  try {
    console.log('connecting...')
    //console.log(body)
    const {data} = await api.post('/auth/login', body)
    localStorage.setItem('token', data.token)
    console.log(data)
    return 200
  } catch (error) {
    return error.response.data
  }
}

export {
  login
}