import api from "./config";

const getProjects = async () => {

    try {
        const { data } = await api.get(`/project/byVolunteer`, {
            headers: {
                'token': localStorage.getItem('token')
            }
        })
        return data
      } catch (error) {
        return error.message
      }
}

export default getProjects