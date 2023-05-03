import api from "./config";

const getProfile = async () => {

    try {
        const { data } = await api.get('/member/profile', {
            headers: {
                'token': localStorage.getItem('token')
            }
        })
        return data
      } catch (error) {
        return error.message
      }
}

export default getProfile