import api from "./config";

const getProfessions = async () => {
  try {
    const { data } = await api.get('/professional/selectProffesion')
    return data
  } catch (error) {
    return error.message
  }
}

export default getProfessions