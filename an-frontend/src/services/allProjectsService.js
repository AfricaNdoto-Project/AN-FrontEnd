import api from "./config";

const getAllProjects = async () => {

    try {
        const { data } = await api.get('/project', {
            headers: {
                'token': localStorage.getItem('token')
            }
        })
        return data
      } catch (error) {
        return error.message
      }
}

export default getAllProjects