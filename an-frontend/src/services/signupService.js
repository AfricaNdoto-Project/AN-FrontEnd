import api from "./config";

const signup = async (body) => {
  try {
    console.log('connecting...')
    console.log(body.profession)
    await api.post('/auth/signup', body)
    //console.log(data)
    // localStorage.setItem('token', data.token)
    return 200
  } catch (error) {
    return error.response.data
  }
}

export {
  signup
}