import { UserContext } from '../../context/userContext'
import { useEffect, useContext, useState } from 'react'
import { getProfile } from '../../services/membersService'
import { getMyDonations } from '../../services/donorsService'
import { getProjects } from '../../services/projectsService'
import './profile.css'
import { Link } from 'react-router-dom'
import ImgMediaCard from './cards/cardMembers'
import Loading from '../../components/loading/loading'

import CardMembers from './cards/cardMembers'
import CardDonations from './cards/cardDonations'
import CardProject from './cards/cardProject'
import CardEvent from './cards/cardEvent'
import CardProfessional from './cards/cardProfessional'
import CardEquipment from './cards/cardEquipment'
import CardCalendar from './cards/cardCalendar'

import useIsAdmin from '../../hooks/useAdmin'

import RecipeReviewCard from './userInfo/userInfo'
import { Box, Container, Divider, Tabs } from '@mui/material'

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
        <RecipeReviewCard user={user} />
      </>
    )
  }
  //Here show the projects by Member/Volunteer
  const displayProjects = () => {
    return projects.map((elem) => {
      return (
        <div className="donation" key={elem.id}>
          <div>
            <h3>Project Name: {elem.name}</h3>
          </div>
          <div>
            <p>Target: </p>
            {elem.target}
          </div>
          <div>
            <p>Description: </p>
            {elem.description}
          </div>
        </div>
      )
    })
  }

  //Here show the donations by Member/Donor
  const displayDonations = () => {
    return donation.donations.map((elem) => {
      return (
        <div className="donation" key={elem.id}>
          <div>
            <h3>Donation {elem.id}</h3>
          </div>
          <div>
            <p>Amount: </p>
            {elem.amount}
          </div>
          <div>
            <p>Type: </p>
            {elem.type}
          </div>
        </div>
      )
    })
  }

  const displayDonationsAndProjects = () => {
    return [displayDonations(), displayProjects()]
  }
  //Based on our role this function show different info for volunteers, donors or volunteers_donors
  const displayData = () => {
    if (user.role === 'donor') {
      if (donation.donations.length !== 0) {
        return displayDonations()
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
      ;('e')
    } else {
      return displayDonationsAndProjects()
    }
  }
  if (user !== undefined && Object.keys(donation).length !== 0) {
    return (
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
            height: { lg: '85%', xl: '1130px' },
            padding: 3,
            alignSelf: 'center',
            justifyContent: 'center',
            borderColor: 'pink',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignSelf: 'center',
              width: '100%',
              height: { lg: '98.5%', xl: '1090px' },
            }}
          >
            {displayUserName()}
            <>{displayData()}</>
          </Box>
        </Container>

        <Divider sx={{ margin: 1 }} />

        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            alignContent: { xl: 'flex-start' },
            flexWrap: 'wrap',
            columnGap: { lg: 4, xl: 5 },
            rowGap: { lg: 30, xl: 10 },
            borderColor: 'white',
            width: '80%',
            height: '85%',
            alignSelf: 'center',
            justifyContent: 'center',
            padding: 3.5,
            margin: 0,
            overflow: { lg: 'scroll', xl: 'clip' },
            visibility: {
              xs: 'collapse',
              sm: 'collapse',
              md: 'collapse',
              lg: 'visible',
              xl: 'visible',
            },
          }}
        >
          <Box
            sx={{
              width: { lg: '270px', xl: '370px' },
              height: { lg: '180px', xl: '300px' },
            }}
          >
            <CardMembers />
          </Box>
          <Box
            sx={{
              width: { lg: '270px', xl: '370px' },
              height: { lg: '180px', xl: '300px' },
            }}
          >
            <CardDonations />
          </Box>
          <Box
            sx={{
              width: { lg: '270px', xl: '370px' },
              height: { lg: '180px', xl: '300px' },
            }}
          >
            <CardProject />
          </Box>
          <Box
            sx={{
              width: { lg: '270px', xl: '370px' },
              height: { lg: '180px', xl: '300px' },
            }}
          >
            <CardEvent />
          </Box>
          <Box
            sx={{
              width: { lg: '270px', xl: '370px' },
              height: { lg: '180px', xl: '300px' },
            }}
          >
            <CardProfessional />
          </Box>
          <Box
            sx={{
              width: { lg: '270px', xl: '370px' },
              height: { lg: '180px', xl: '300px' },
            }}
          >
            <CardEquipment />
          </Box>
          <Box
            sx={{
              width: { lg: '270px', xl: '370px' },
              height: { lg: '180px', xl: '300px' },
            }}
          >
            <CardCalendar />
          </Box>
        </Container>

        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            justifyContent: 'space-around',
            gap: 2,
            padding: 0,
            height: { xs: '100', sm: '600px', md: '600px' },
            width: { xs: '100', sm: '460px', md: '460px' },
            margin: 0,
            alignSelf: 'center',
            flexWrap: {
              xs: 'nowrap',
              sm: 'nowrap',
              md: 'wrap',
              lg: 'wrap',
              xl: 'wrap',
            },
            visibility: {
              xs: 'visible',
              sm: 'visible',
              md: 'visible',
              lg: 'collapse',
              xl: 'collapse',
            },
          }}
        >
          <Tabs variant="scrollable" scrollButtons="auto" value={7}>
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardMembers />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardDonations />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardProject />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardEvent />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardProfessional />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardEquipment />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardCalendar />
            </Box>
          </Tabs>
        </Container>
      </Container>
    )
  } else {
    return <Loading />
  }
}

export default Profile
