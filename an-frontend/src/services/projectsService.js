import api from "./config";

const getAllProjects = async () => {
  try {
    const { data } = await api.get('/project/projectInformation')
    return data
  } catch (error) {
    return error.message
  }
}

const getProjects = async () => {
  try {
    const { data } = await api.get(`/project/byVolunteer`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error.message
  }
}

export {
    getAllProjects,
    getProjects
}