import { deleteMember } from '../../../services/membersService'
import { getOneVolunteer } from '../../../services/volunteerService'
import { getDonor } from '../../../services/donorsService'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'


const Delete = () => {
    const [donorUser, setDonorUSer] = useState({})
    const [volunteerUser, setVolunteerUSer] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      getData()
    }, [])
    console.log(id)
    const getData = async () => {
      const donor = await getDonor(id)
      const volunteer = await getOneVolunteer(id)
      setDonorUSer(donor)
      setVolunteerUSer(volunteer)
    }

    const deleteMemberById = async () => {
        await deleteMember(id)
        localStorage.removeItem('token')
        alert('Account deleted')
        return navigate('/login')
    }
    
  if(Object.keys(donorUser).length !== 0 || Object.keys(volunteerUser).length !== 0) {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
        <h2>Are you Sure?</h2>
        <button onClick={deleteMemberById}>Delete Account</button>
      </div>
    )
  } else {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
        <CircularProgress />
      </Box>
    )
  }
}

export default Delete