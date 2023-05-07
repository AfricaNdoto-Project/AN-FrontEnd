import api from "./config";

const getVolunteer = async ( idMember ) => {
    try {
        const { data } = await api.get(`/volunteer/getVolunteerByMemberId/${ idMember }`, {
            headers: {
                'token': localStorage.getItem('token')
            }
        } )
        return data
      } catch (error) {
        return error.message
      }
}

const getDonor = async ( idMember ) => {
    try {
        const { data } = await api.get(`/donor/getDonorByMemberId/${ idMember }`, {
            headers: {
                'token': localStorage.getItem('token')
            }
        } )
        return data
      } catch (error) {
        return error.message
      }
}

export {
    getVolunteer,
    getDonor
}