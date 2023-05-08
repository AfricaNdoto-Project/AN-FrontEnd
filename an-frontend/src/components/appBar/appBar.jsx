import AppBar from '@mui/material/AppBar'
import { Link, useNavigate } from 'react-router-dom'

import SwipeableTemporaryDrawer from './sideMenu/sideMenu'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function ButtonAppBar() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  
  return (
    <Box sx={{ flexGrow: 1, bgcolor:'white' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex' }}
          >
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
            Logo
            </Link>
          </Typography>
          <Link to="/signup">
            <Button color="inherit">Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/donation">
            <Button color="inherit">Donation</Button>
          </Link>
          {/* logout button */}
          <Button color="inherit" onClick={logout}>
            LogOut
          </Button>
          <SwipeableTemporaryDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
