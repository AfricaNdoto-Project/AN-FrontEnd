import { UserContext } from '../../context/userContext'
import { useEffect, useContext, useState } from 'react'
import { getProfile } from '../../services/membersService'
import { getMyDonations } from '../../services/donorsService'
import { getProjects } from '../../services/projectsService'
import './profile.css'
import { Link } from 'react-router-dom'
import ImgMediaCard from './cards/cardsTemplate'
import Loading from '../../components/loading/loading'
import CardMembers from './cards/cardsTemplate'

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
          height: '100%',
          border: 2,
          margin: 0,
          borderColor: 'green',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row',
          },
          justifyContent: { xs: 'center', sm: 'center' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: { xs: '100%', sm: '70%', md: '30%', lg: '30%', xl: '20%' },
            height: '90%',
          }}
        >
          {displayUserName()}
          <div className="donations">{displayData()}</div>
        </Box>
        <Divider sx={{ margin: 1 }} />

        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            alignContent: 'flex-start',
            flexWrap: 'wrap',
            gap: 5,
            borderColor: 'white',
            width: '70%',
            height: '100%',
            padding: 5,
            margin: 0,
            visibility: {
              xs: 'collapse',
              sm: 'collapse',
              md: 'visible',
              lg: 'visible',
              xl: 'visible',
            },
          }}
        >
          <Box
            sx={{
              width: 370,
              height: 300,
            }}
          >
            <CardMembers/>
          </Box>
          <Box
            sx={{
              width: 370,
              height: 300,
            }}
          >
            <ImgMediaCard />
          </Box>
          <Box
            sx={{
              width: 370,
              height: 300,
            }}
          >
            <ImgMediaCard />
          </Box>
          <Box
            sx={{
              width: 370,
              height: 300,
            }}
          >
            <ImgMediaCard />
          </Box>
          <Box
            sx={{
              width: 370,
              height: 300,
            }}
          >
            <ImgMediaCard />
          </Box>
          <Box
            sx={{
              width: 370,
              height: 300,
            }}
          >
            <ImgMediaCard />
          </Box>
          <Box
            sx={{
              width: 370,
              height: 300,
            }}
          >
            <ImgMediaCard />
          </Box>
        </Container>

        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            justifyContent: 'space-around',
            gap: 2,
            width: '70%',
            padding: 0,
            margin: 0,
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
              md: 'collapse',
              lg: 'collapse',
              xl: 'collapse',
            },
          }}
        >
          <Tabs variant="scrollable" scrollButtons="auto" value={7}>
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <ImgMediaCard />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <ImgMediaCard />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <ImgMediaCard />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <ImgMediaCard />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <ImgMediaCard />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <ImgMediaCard />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <ImgMediaCard />
            </Box>
          </Tabs>
        </Container>

        {/*       <Link to={`/profile/edit/${user.id}`}>
        <button>Edit Account</button>
      </Link>
      <Link to={`/profile/delete/${user.id}`}>
        <button>Delete Account</button>
      </Link> */}
      </Container>
    )
  } else {
    return <Loading />
  }
}

export default Profile
