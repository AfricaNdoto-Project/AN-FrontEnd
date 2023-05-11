import Card from '@mui/material/Card'
import * as React from 'react'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'

import { Button } from '@mui/material'



import { CardActions } from '@mui/material'
import { Link } from 'react-router-dom'

const UserInfo = ( {user} ) => {
  return (
    <Card
    sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader
        sx={{ margin: 0 }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',

              width: '100%',
            }}
            variant="body2"
            color="text.secondary"
          >
            <Typography
            >
              {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
            </Typography>
          </Typography>
        }
        subheader={
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',

              width: '100%',
            }}
            variant="body2"
            color="text.secondary"
          >
            <Typography
            >
              {user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}
            </Typography>
          </Typography>
        }
      />
      <CardContent>
        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
          variant="body2"
          color="text.secondary"
        >
          <h3>Email: </h3> <p>{user.email}</p>
        </Typography>
        <Typography
          sx={{
            isplay: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
          variant="body2"
          color="text.secondary"
        >
          <h3>Phone Number: </h3> <p>{user.phone}</p>
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
          variant="body2"
          color="text.secondary"
        >
          <h3>ID Number: </h3> <p>{user.idNumber}</p>
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
          variant="body2"
          color="text.secondary"
        >
          <h3>Role: </h3>
          <p>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: 'center', justifyContent: 'center' }}>
        <Link to={`/profile/edit/${user.id}`}>
          <Button sx={{borderRadius: 10, height: 60, fontSize: 12, boxShadow: 5, size:'medium'}} variant='contained'>Edit Account</Button> 
        </Link>
        <Link to={`/profile/delete/${user.id}`}>
          <Button sx={{borderRadius: 10, height: 60, fontSize: 12, boxShadow: 5}} variant='contained'>Delete Account</Button> 
        </Link>
      </CardActions>
    </Card>
  )
}

export default UserInfo