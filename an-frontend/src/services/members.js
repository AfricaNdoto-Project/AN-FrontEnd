import api from './config'

const getMembersList = async () => {
  try {
    const { data } = await api.get('/member/', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (e) {
    return e.response.data
  }
}

const getOneMember = async (id) => {
  try {
    const { data } = await api.get(`member/${id}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (e) {
    return e.response.data
  }
}

export { getMembersList, getOneMember }
