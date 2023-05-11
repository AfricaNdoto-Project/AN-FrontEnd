import AppBar from '@mui/material/AppBar'
import { Link, useNavigate } from 'react-router-dom'
import useIsAdmin from '../../hooks/useAdmin'
import SwipeableTemporaryDrawer from './sideMenu/sideMenu'
import { Avatar } from '@mui/material';

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '../appBar/appBar.css'
import logo from '../../assets/thumb_AN.png'

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const { adminData } = useIsAdmin()
  const { isAdmin, setIsAdmin } = adminData
  const logout = () => {
    if(isAdmin){
      setIsAdmin(false)
    }else {
     null 
    }
    localStorage.removeItem('token')
    navigate('/login')
  }

  const token = localStorage.getItem('token')

  const displayProfileLink = () => {
    if(token) {
      return (
        <Link to="/profile">
          <Button color="inherit" sx={{margin:'8px'}}>Profile</Button>
        </Link>
      )
    }
  }
  const displayLogout = () => {
    if(token) {
      return (
        <Button color="inherit" onClick={logout} sx={{margin:'8px'}}>
            LogOut
        </Button>
      )
    }
  }

  const displayLogin = () => {
    if(!token) {
      return (
        <Link to="/login">
            <Button variant="inherit" color="inherit" sx={{margin:'8px', color:'white'}}>Login</Button>
        </Link>
      )
    }
  }
  const displaySignUp = () => {
    if(!token) {
      return (
        <Link to="/signup">
            <Button color="inherit" sx={{margin:'8px', color:'white'}} >Sign Up</Button>
        </Link>
      )
    }
  }


  return (

    <Box sx={{ flexGrow: 1, bgcolor: 'white',width:'100vw', minWidth: '390px' }}>

      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex' }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Avatar alt="Logo AfricaNdoto" src={logo} />
            </Link>
          </Typography>

          { displaySignUp() }
          { displayLogin() }
          <Link to="/donation">
            <Button variant="contained" color="secondary" size="large">Donation</Button>
          </Link>
          { displayProfileLink() }

          {/* logout button */}
          { displayLogout() }
          <SwipeableTemporaryDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
