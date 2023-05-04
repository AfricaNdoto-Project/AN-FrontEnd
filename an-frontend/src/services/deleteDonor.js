import api from "./config";

const deleteDonor = async ( idMember ) => {
    try {
        const { data } = await api.delete(`/donor/${ idMember }`, {
            headers: {
                'token': localStorage.getItem('token')
            }
        } )
        return data
      } catch (error) {
        return error.message
      }
}

export default deleteDonor