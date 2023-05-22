import api from "./config";

const getAllProjects = async () => {
  try {
    const { data } = await api.get('/project/projectInformation')
    console.log(data)
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

const CreateProject = async (body) => {
  try {
      await api.post('/project/', body, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return 200
  } catch (error) {
    return error.response.data
  }
}

export {
    getAllProjects,
    getProjects,
    CreateProject
}