import api from './config'

const getDonorDonations = async (id) => {
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

const getMyDonations = async () => {
  try {
    const { data } = await api.get('/donations/myDonations', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error.message
  }
}

const getDonor = async (idMember) => {
  try {
    const { data } = await api.get(`/donor/getDonorByMemberId/${idMember}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error.message
  }
}

export { getDonorDonations, getMyDonations, getDonor }
