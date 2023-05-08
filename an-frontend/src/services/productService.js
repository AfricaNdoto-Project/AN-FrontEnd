import api from "./config";

const getProducts = async () => {
  try {
    const { data } = await api.get('/product', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error.message
  }
}

export default getProducts