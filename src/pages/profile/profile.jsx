import { UserContext } from '../../context/userContext'
import { useEffect, useContext } from 'react'
import { getProfile } from '../../services/membersService'

import './profile.css'
import {Box, Container} from '@mui/material'
import Loading from '../../components/loading/loading'
import UserInfo from './userInfo/userInfo'
import { Divider } from '@mui/material'
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
            margin: 0,
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
              marginRight: 0,
              display: 'flex',
              justifyContent:'center',
              alignSelf: 'center'
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
              {user.name && <UserInfo sx={{ height: '25%' }} user={user} />}
            </Box>
          </Container>
          <Container>
            {user.role === 'admin' ? <AdminProfile /> : <MemberProfile />}
          </Container>
        </Container>
      </>
    )
  } else {
    return <Loading />
  }
}

export default Profile
