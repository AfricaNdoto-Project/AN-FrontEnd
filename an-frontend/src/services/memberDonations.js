import api from "./config";

const getDonations = async () => {
    try {
        const { data } = await api.get('/donations/myDonations', {
            headers: {
                'token': localStorage.getItem('token')
            }
        } )
        return data
      } catch (error) {
        return error.message
      }
}

export default getDonations