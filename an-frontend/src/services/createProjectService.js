import api from "./config";

const CreateProject = async (body) => {
  try {
    console.log('connecting...')
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
    CreateProject
}