import { UserContext } from '../../context/userContext'
import { useEffect, useContext, useState } from 'react'
import { getProfile } from '../../services/membersService'
import { getMyDonations } from '../../services/donorsService'
import { getProjects } from '../../services/projectsService'
import './profile.css'
import Loading from '../../components/loading/loading'


/* import useIsAdmin from '../../hooks/useAdmin' */

import RecipeReviewCard from './userInfo/userInfo'
import { Box, Container, Divider } from '@mui/material'

import TaskBoard from './taskBoard/taskBoard'

const Profile = () => {
  const [donation, setDonation] = useState([])
  const [projects, setProjects] = useState([])
  const { user, setUser } = useContext(UserContext)

  /* const { adminData } = useIsAdmin()
  const { isAdmin } = adminData
 */
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
    //algo
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
        {user.role === 'admin' ? TaskBoard() : null}
      </Container>
    )
  } else {
    return <Loading />
  }
}

export default Profile
