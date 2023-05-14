import AppBar from '@mui/material/AppBar'
import { Link, useNavigate } from 'react-router-dom'
import useIsAdmin from '../../hooks/useAdmin'
import SwipeableTemporaryDrawer from './sideMenu/sideMenu'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '../appBar/appBar.css'
import logo from '../../assets/Images/AN_logo_80.png'

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const { adminData } = useIsAdmin()
  const { isAdmin, setIsAdmin } = adminData
  const logout = () => {
    if (isAdmin) {
      setIsAdmin(false)
    } else {
      null
    }
    localStorage.removeItem('token')
    navigate('/login')
  }

  const token = localStorage.getItem('token')

  const displayProfileLink = () => {
    if (token) {
      return (
        <Link to="/profile">
          <Button  sx={{ margin: '8px', color:'#87480E' }}>
            Profile
          </Button>
        </Link>
      )
    }
  }
  const displayLogout = () => {
    if (token) {
      return (
        <Button onClick={logout} sx={{ margin: '8px',  color:'#87480E' }}>
          LogOut
        </Button>
      )
    }
  }

  const displayLogin = () => {
    if (!token) {
      return (
        <Link to="/login">
          <Button
            variant="inherit"
            color="inherit"
            sx={{ margin: '8px', color:'#87480E' }}
          >
            Login
          </Button>
        </Link>
      )
    }
  }
  const displaySignUp = () => {
    if (!token) {
      return (
        <Link to="/signup">
          <Button color="inherit" sx={{ margin: '8px', color: '#87480E' }}>
            Sign Up
          </Button>
        </Link>
      )
    }
  }

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'white', width: '100vw', minWidth: '390px' }}
    >
      <AppBar position="static" sx={{ height: '100px', paddingTop: '6px', bgcolor:'#FAEFE4' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}
          >
            <Link to="/" style={{ textDecoration: 'none'}}>
              <Typography variant="h6" component="div">
                <img src={logo} alt="Logo AfricaNdoto" />
              </Typography>
            </Link>
          </Typography>

          {displaySignUp()}
          {displayLogin()}
          <Link to="/donation">
            <Button variant="contained" size="large" sx={{ bgcolor:'#AB3A98', }}>
              Donation
            </Button>
          </Link>
          {displayProfileLink()}
          {displayLogout()}
          <SwipeableTemporaryDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
