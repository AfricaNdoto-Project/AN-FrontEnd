import api from "./config";

const deleteMember = async ( idMember ) => {
    try {
        const { data } = await api.delete(`/member/${ idMember }`, {
            headers: {
                'token': localStorage.getItem('token')
            }
        } )
        return data
      } catch (error) {
        return error.message
      }
}

export default deleteMember