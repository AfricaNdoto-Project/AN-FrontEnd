import api from './config'

const getDonations = async (id) => {
  try {
    const { data } = await api.get(`/donor/donations/${id}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (e) {
    return e.response.data
  }
}

export { getDonations }
