import api from './config'

const getMembersList = async () => {
  try {
    const { data } = await api.get('/member/', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error.message
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
  } catch (error) {
    return error.message
  }
}

const deleteMember = async (idMember) => {
  try {
    const { data } = await api.delete(`/member/${idMember}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error.message
  }
}

const getProfile = async () => {
  try {
    const { data } = await api.get('/member/profile', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error.message
  }
}

export { getMembersList, getOneMember, deleteMember, getProfile }
