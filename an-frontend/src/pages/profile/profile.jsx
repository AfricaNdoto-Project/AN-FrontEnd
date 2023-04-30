import { UserContext } from '../../context/userContext'
import { useEffect, useContext, useState } from "react"
import getProfile from '../../services/userService'
import getDonations from '../../services/memberDonations'
import './profile.css'

const Profile = () => {
  const [donation, setDonation] = useState([])
  const {user, setUser} = useContext(UserContext)


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await getProfile()
    const donations = await getDonations()
    setUser(result)
    setDonation(donations)
  }

  const displayUserName = () => {
    return (
      <>
        <div>{user.name}</div>
        <div>{user.role}</div>
      </>
    )
  }


  const displayDonations = () => {
    return donation.donations.map(elem => {
      return (
        <div className='donation' key={ elem.id }>
          <div ><h3>Donation { elem.id }</h3></div>
          <div><p>Amount: </p>{elem.amount}</div>
          <div><p>Type: </p>{elem.type}</div>
        </div>
      )
    })
  }
 console.log(donation)
 if(user !== undefined && Object.keys(donation).length !== 0 ) {
   return (
     <>
      { displayUserName() }
      <div className='donations'>
       { user.role === 'donor' ? displayDonations() : 'aqui los proyectos a los que perteneces' }
      </div>
     </>
   )
 }
}

export default Profile