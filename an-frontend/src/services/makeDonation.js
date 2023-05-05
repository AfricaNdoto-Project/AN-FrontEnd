import api from "./config";

const makeDonation = async (body) => {
  try {
    console.log('connecting...')
    const token = localStorage.getItem('token')
    if(token) {
      await api.post('/donations', body, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    }
  else {
    const { data } = await api.post('/auth/login', {
      email: 'anonymous@email.com',
      password: 'password1'
    })
    localStorage.setItem('token', data.token)
    console.log('entra')

    await api.post('/donations', body, {
      headers: {
          'token': localStorage.getItem('token')
      }
  })
  }
    return 200
  } catch (error) {
    return error.response.data
  }
}

export {
    makeDonation
}