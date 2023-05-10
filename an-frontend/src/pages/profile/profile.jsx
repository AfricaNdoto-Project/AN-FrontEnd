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

 /*  if (user !== undefined && Object.keys(donation).length !== 0) { */
    return (
      <>
      {TaskBoard()}
      </>
    )
/*   } else { */
/*     return <Loading /> */
/*   } */
}

export default Profile
