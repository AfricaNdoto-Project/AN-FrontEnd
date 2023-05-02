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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding sx={{ width: 100 }}>
          <ListItemButton>
            <Link to="/projects">
              <Button color="inherit">Projects</Button>
            </Link>
            <ListItemIcon></ListItemIcon>
          </ListItemButton>
        </ListItem>
        {/*         {['Projects', 'Events', 'Calendar', 'About Us'].map((text, index) => (
          
        ))} */}
        <ListItem disablePadding sx={{ width: 100 }}>
          <ListItemButton>
            <Link to="/events">
              <Button color="inherit">Events</Button>
            </Link>
            <ListItemIcon></ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ width: 100 }}>
          <ListItemButton>
            <Link to="/calendar">
              <Button color="inherit">Calendar</Button>
            </Link>
            <ListItemIcon></ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ width: 100 }}>
          <ListItemButton>
            <Link to="/aboutUs">
              <Button color="inherit">About Us</Button>
            </Link>
            <ListItemIcon></ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Link to="/login">
        <Button color="inherit">Login</Button>
      </Link>
      <Link to="/signup">
        <Button color="inherit">Sign Up</Button>
      </Link>
    </Box>
  )

  return (
    <div
      style={{
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {<MenuIcon sx={{ color: 'white' }} />}
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
    </div>
  )
}
