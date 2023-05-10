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

import RecipeReviewCard from './userInfo/userInfo'
import { Box, Button, Container } from '@mui/material'
import TaskBoard from './adminView/taskBoard/taskBoard'
import { Divider } from '@mui/material'

const Profile = () => {
  const [donation, setDonation] = useState([])
  const [projects, setProjects] = useState([])
  const [active, setIsActive] = useState('donations&projects')
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
        <RecipeReviewCard sx={{ height: '25%' }} user={user} />
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
    return (
      <Container maxWidth={false} sx={{ borderColor: 'blue', display: 'flex' }}>
        <Box>
          <Donation donations={donation}></Donation>
        </Box>
        <Box>
          <Project projects={projects} />
        </Box>
      </Container>
    )
  }

  const displayAdminView = () => {
    return (
      <>
        {active === 'donations&projects' && displayDonationsAndProjects()}
        {active === 'taskboard' && <TaskBoard />}
      </>
    )
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
      //
    }
  }
  if (user !== undefined && Object.keys(donation).length !== 0) {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '30px',
            width: '100%',
            marginTop: 2,
            justifyContent: 'center',
          }}
        >
          <Button
            disabled={false}
            variant="filledTonal"
            size="small"
            sx={{ borderRadius: 10, height: 25, fontSize: 12, boxShadow: 5 }}
            onClick={() => setIsActive('donations&projects')}
          >
            General
          </Button>
          <Divider sx={{ margin: 3 }} />
          <Button
            disabled={false}
            variant="filledTonal"
            size="small"
            sx={{ borderRadius: 10, height: 25, fontSize: 12, boxShadow: 5 }}
            onClick={() => setIsActive('taskboard')}
          >
            TaskBoard
          </Button>
        </Box>
        <Container
          maxWidth={false}
          sx={{
            padding: '10px',
            display: 'flex',
            width: '100%',
            height: {
              xs: '100%',
              sm: '100%',
              md: '100%',
              lg: '1300px',
              xl: '100%',
            },
            border: 2,
            margin: 0,
            borderColor: 'green',
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
            },
          }}
        >
          <Container
            sx={{
              width: { sx: '100%', sm: '50%', md: '60%', lg: '30%', xl: '20%' },
              height: { lg: '85%', xl: '90%' },
              padding: 3,
              marginLeft: 0,
              borderColor: 'pink',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignSelf: 'center',
                width: '100%',
                borderColor: 'green',
                height: { lg: '98.5%', xl: '1090px' },
              }}
            >
              {displayUserName()}
              {displayData()}
            </Box>
          </Container>
          <Divider sx={{ margin: 1 }} />

          {user.role !== 'volunteer' &&
          user.role !== 'donor' &&
          user.role !== 'admin'
            ? displayDonationsAndProjects()
            : null}
          {user.role === 'admin' ? displayAdminView() : null}
        </Container>
      </>
    )
  } else {
    return <Loading />
  }
}

export default Profile
