import { UserContext } from '../../context/userContext'
import { useEffect, useContext, useState } from "react"
import getProfile from '../../services/userService'
import getDonations from '../../services/memberDonations'
import getProjects from '../../services/projectsService'
import './profile.css'
import { Link } from 'react-router-dom'


import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import RecipeReviewCard from './userInfo/userInfo'

const Profile = () => {
  const [donation, setDonation] = useState([])
  const [projects, setProjects] = useState([])
  const {user, setUser} = useContext(UserContext)


  useEffect(() => {
    getData()
    getProjects()
  }, [])
//In this function search the donations, projects and the info of one member
  const getData = async () => {
    const result = await getProfile()
    const donations = await getDonations()
    const project = await getProjects()
    setProjects(project)
    setUser(result)
    setDonation(donations)
  }
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
      return displayDonations()
    }
    else if(user.role === 'volunteer') {
      return displayProjects()
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
     <>
      { displayUserName() }
      <div className='donations'>
        { displayData() }
      </div>
      <Link to='/profile/edit'>
        <button>
          Edit Account
        </button>
      </Link>
      <Link to='/profile/delete'>
        <button>
          Delete Account
        </button>
      </Link>
     </>
   )
  }
  else {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
      <CircularProgress />
    </Box>
  )
 }
}

export default Profile