//This service able admins to see the donations of a donor

import api from '../config'

const getMembersList = async () => {
 try{
  const { data } = await api.get('/member/', {
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  return data
 } catch (e) {
  return e.response.data
 }
}
export { getMembersList }
