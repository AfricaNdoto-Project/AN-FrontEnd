import api from "./config";

const signup = async (body) => {
  try {
    console.log('connecting...')
    //console.log(body.profession)
    await api.post('/auth/signup', body)
    return 200
  } catch (error) {
    return error.response.data
  }
}

export {
  signup
}