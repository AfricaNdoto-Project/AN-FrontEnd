import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 250, bgcolor:'#F5FAFF' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding sx={{ width: 100 }}>
          <ListItemButton>
            <Link to="/allprojects">
              <Button sx={{color:'#87480E'}}>Projects</Button>
            </Link>
            <ListItemIcon></ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ width: 100 }}>
          <ListItemButton>
            <Link to="/events">
              <Button sx={{color:'#87480E'}}>Events</Button>
            </Link>
            <ListItemIcon></ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ width: 100 }}>
          <ListItemButton>
            <Link to="/calendar">
              <Button sx={{color:'#87480E'}}>Calendar</Button>
            </Link>
            <ListItemIcon></ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ width: 100 }}>
          <ListItemButton>
            <Link to="/aboutus">
              <Button sx={{color:'#87480E'}}>About Us</Button>
            </Link>
            <ListItemIcon></ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Link to="/login">
        <Button sx={{color:'#87480E'}}>Login</Button>
      </Link>
      <Link to="/signup">
        <Button sx={{color:'#87480E'}}>Sign Up</Button>
      </Link>
    </Box>
  )

  return (
    <>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: '#87480E' }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  )
}
