import api from "./config";

const getVolunteers = async () => {
    try {
        const { data } = await api.get('/member/projects', {
          headers: {
              'token': localStorage.getItem('token')
          }
      })
        return data
      } catch (error) {
        return error.message
      }
}

export default getVolunteers