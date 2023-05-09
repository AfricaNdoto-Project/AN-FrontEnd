import { UserContext } from '../../context/userContext'
import { useEffect, useContext, useState } from "react"
import { getProfile } from '../../services/membersService'
import { getMyDonations } from '../../services/donorsService'
import { getProjects } from '../../services/projectsService'
/* import getProfile from '../../services/userService'
import getDonations from '../../services/memberDonations'
import getProjects from '../../services/projectsService' */
import { Container } from '@mui/material'
import './profile.css'
import { Link } from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Loading from '../../components/loading/loading'


import RecipeReviewCard from './userInfo/userInfo'

const Profile = () => {
  const [donation, setDonation] = useState([])
  const [projects, setProjects] = useState([])
  const { user, setUser } = useContext(UserContext)


  useEffect(() => {
    const getData = async () => {
      const result = await getProfile()
      const donations = await getMyDonations()
      const project = await getProjects()
      setProjects(project)
      setUser(result)
      setDonation(donations)
    }
    getData()
  }, [setUser])
//In this function search the donations, projects and the info of one member
  
//Here display the user information
  const displayUserName = () => {
    return (
      <>
        <RecipeReviewCard sx={{ height: '25%'}} user={ user }/>
      </>
    ) 
  }
//Here show the projects by Member/Volunteer
  const displayProjects = () => {
    return projects.map(elem => {
      return (
        <div className='donation' key={ elem.id }>
          <div ><h3>Project Name: { elem.name }</h3></div>
          <div><p>Target: </p>{ elem.target }</div>
          <div><p>Description: </p>{ elem.description }</div>
        </div>
      )
    })
  }

//Here show the donations by Member/Donor
  const displayDonations = () => {
    return donation.donations.map(elem => {
      return (
        <div className='donation' key={ elem.id }>
          <div ><h3>Donation { elem.id }</h3></div>
          <div><p>Amount: </p>{ elem.amount }</div>
          <div><p>Type: </p>{ elem.type }</div>
        </div>
      )
    })
  }

  const displayDonationsAndProjects = () => {
    return [ displayDonations(), displayProjects() ]
  }
//Based on our role this function show different info for volunteers, donors or volunteers_donors
  const displayData = () => {
    if(user.role === 'donor') {
      if(donation.donations.length !== 0) {
        return displayDonations()
      }
      else {
        return <div>No hay donaciones relacionados a este miembro</div>
      }
    }
    else if(user.role === 'volunteer') {
      if(projects.length !== 0){
        return displayProjects()
      } else {
        return <div>No hay proyectos relacionados a este miembro</div>
      }
    }
    else if(user.role === 'admin') {
      return <div>Soy Admin</div>
    }
    else {
      return displayDonationsAndProjects()
    }
  }
 if(user !== undefined && Object.keys(donation).length !== 0 ) {
   return (
     <Container
       sx={{
         border: '1px solid black',
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-around',
         margin: '5px',
         width: '100vw',
       }}
       maxWidth={false}
     >
       {displayUserName()}
       <div className="donations">{displayData()}</div>
       <Container
         sx={{
           border: '1px solid black',
         }}
       >
         <Link to={`/profile/edit/${user.id}`}>
           <button>Edit Account</button>
         </Link>
       </Container>
       <Container
         sx={{
           border: '1px solid black',
         }}
       >
         <Link
           sx={{ border: '1px solid black' }}
           to={`/profile/delete/${user.id}`}
         >
           <button>Delete Account</button>
         </Link>
       </Container>
     </Container>
   )
  }
  else {
  return (
      <Loading />
  )
 }
}

export default Profile