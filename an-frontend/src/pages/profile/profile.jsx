import { UserContext } from '../../context/userContext'
import { useEffect, useContext, useState } from "react"
import { getProfile } from '../../services/membersService'
import { getMyDonations } from '../../services/donorsService'
import { getProjects } from '../../services/projectsService'
import './profile.css'
import { Link } from 'react-router-dom'
import ImgMediaCard from './cards/cardsTemplate'
import Loading from '../../components/loading/loading'

import useIsAdmin from '../../hooks/useAdmin'


import RecipeReviewCard from './userInfo/userInfo'
import { Box, Container, Divider } from '@mui/material'

const Profile = () => {
  const [donation, setDonation] = useState([])
  const [projects, setProjects] = useState([])
  const { user, setUser } = useContext(UserContext)

  const { adminData } = useIsAdmin()
  const { isAdmin } = adminData


//In this function search the donations, projects and the info of one member
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
//Here display the user information
  const displayUserName = () => {
    return (
      <>
        <RecipeReviewCard user={ user }/>
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
      'e'
    }
    else {
      return displayDonationsAndProjects()
    }
  }
 if(user !== undefined && Object.keys(donation).length !== 0 ) {
  
  return (
    <Container
      sx={{
        padding: '10px',
        margin: 0,
        display: 'flex',
        width: '100vw',
        height: '100%',
        border: 2,
        borderColor: 'green',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: 334,
          height: '100%',
        }}
      >
        {displayUserName()}
        <div className="donations">{displayData()}</div>
      </Box>
      <Divider sx={{ margin: 1 }} />
      <Box sx={{ display: 'flex', width: 370, height: 400 }}><ImgMediaCard/></Box>

      {/*       <Link to={`/profile/edit/${user.id}`}>
        <button>Edit Account</button>
      </Link>
      <Link to={`/profile/delete/${user.id}`}>
        <button>Delete Account</button>
      </Link> */}
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