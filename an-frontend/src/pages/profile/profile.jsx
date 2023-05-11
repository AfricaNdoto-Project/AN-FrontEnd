import { UserContext } from '../../context/userContext'
import { useEffect, useContext, useState } from 'react'
import { getProfile } from '../../services/membersService'
import { getMyDonations } from '../../services/donorsService'
import { getProjects } from '../../services/projectsService'

import './profile.css'
import { Link } from 'react-router-dom'
import Loading from '../../components/loading/loading'
import Donation from './donations/donations'
import Project from './projects/projects'


import UserInfo from './userInfo/userInfo'
import { Box, Container } from '@mui/material'
import TaskBoard from './taskBoard/taskBoard'

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

  const displayUserName = () => {
    return (
      <>
        <Box>
          <UserInfo sx={{ height: '25%' }} user={user} />
        </Box>
      </>
    )
  }
  const displayProjects = () => {
    return <Project projects={projects} />
  }
  const displayDonations = () => {
    return <Donation donations={donation} />
  }


  const displayDonationsAndProjects = () => {
    return [displayDonations(), displayProjects()]
  }

  const displayData = () => {
    if (user.role === 'donor') {
      if (donation.donations.length !== 0) {
        return <>{displayDonations()}</>
      } else {
        return <div>No hay donaciones relacionados a este miembro</div>
      }
    } else if (user.role === 'volunteer') {
      if (projects.length !== 0) {
        return displayProjects()
      } else {
        return <div>No hay proyectos relacionados a este miembro</div>
      }
    } else if (user.role === 'admin') {
      // return <div>Soy Admin</div>
    } else {
      return (
        <Box
          sx={{
            border: '1px solid  black',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          {displayDonationsAndProjects()}
        </Box>
      )
    }
  }

  if (user !== undefined && Object.keys(donation).length !== 0) {
    return (
      <Container
        id="profile-container"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: '0px',
          width: '100vw',
          height: '100vh',
        }}
        maxWidth={false}
      >
        {displayUserName()}
        <div className="donations">{displayData()}</div>

        <Link to="/newproject">
          <button>New Project</button>
        </Link>
      </Container>
    )
  } else {
    return <Loading />

  }
}

export default Profile
