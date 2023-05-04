import api from "./config";

const deleteVolunteer = async ( idMember ) => {
    try {
        const { data } = await api.delete(`/volunteer/${ idMember }`, {
            headers: {
                'token': localStorage.getItem('token')
            }
        } )
        return data
      } catch (error) {
        return error.message
      }
}

export default deleteVolunteer