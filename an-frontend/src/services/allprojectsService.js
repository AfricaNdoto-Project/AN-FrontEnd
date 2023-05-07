import api from "./config";

const getAllProjects = async () => {

    try {
        const { data } = await api.get('/project/projectInformation')
        return data
      } catch (error) {
        return error.message
      }
}

export default getAllProjects