import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { Link } from 'react-router-dom'

import SwipeableTemporaryDrawer from './sideMenu/sideMenu'


import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'


import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function ButtonAppBar() {

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


  const list = (anchor) => {
     <IconButton
       size="large"
       edge="start"
       color="inherit"
       aria-label="menu"
       sx={{ mr: 2 }}
     >
       <MenuIcon>
         <Box
           sx={{
             width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
           }}
           role="presentation"
           onClick={toggleDrawer(anchor, false)}
           onKeyDown={toggleDrawer(anchor, false)}
         >
           <List>
             {['Projects', 'Events', 'Calendar', 'About Us'].map(
               (text, index) => (
                 <ListItem key={text} disablePadding>
                   <ListItemButton>
                     <ListItemIcon>
                       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                   </ListItemButton>
                 </ListItem>
               )
             )}
           </List>
           <Divider />
           <List>
             {['All mail', 'Trash', 'Spam'].map((text, index) => (
               <ListItem key={text} disablePadding>
                 <ListItemButton>
                   <ListItemIcon>
                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                   </ListItemIcon>
                   <ListItemText primary={text} />
                 </ListItemButton>
               </ListItem>
             ))}
           </List>
         </Box>
       </MenuIcon>
     </IconButton>
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
        </Toolbar>
      </AppBar>
    </Box>
  )
}