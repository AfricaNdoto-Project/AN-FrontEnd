import { UserContext } from '../../context/userContext'
import { useEffect, useContext } from 'react'
import { getProfile } from '../../services/membersService'

import './profile.css'
import { Grid } from '@mui/material'
import Loading from '../../components/loading/loading'
import UserInfo from './userInfo/userInfo'
import AdminProfile from './adminView/AdminProfile'
import MemberProfile from './memberView/memberProfile'

const Profile = () => {
  const { user, setUser } = useContext(UserContext)

  const getData = async () => {
    const result = await getProfile()
    setUser(result)
  }

  useEffect(() => {
    getData()
  }, [])

  if (user !== undefined) {
    return (
      <>
      <Grid 
        container spacing={2}
        padding='10px'
        justifyContent='center'
        height='100%'
        >
        <Grid
          item
          xs= {12} sm= {6} md={6} lg={4} xl={4}>
            {user.name && <UserInfo user={user} />}
        </Grid>
        <Grid
         item
         xs= {12} sm= {6} md={6} lg={8} xl={8}
         >
          {user.role === 'admin' ? <AdminProfile /> : <MemberProfile />}
        </Grid>
      </Grid>
      </>
    )
  } else {
    return <Loading />
  }
}

export default Profile
