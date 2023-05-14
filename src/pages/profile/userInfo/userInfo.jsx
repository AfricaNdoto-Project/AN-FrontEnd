import {
  Divider,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'

import { Link } from 'react-router-dom'

const UserInfo = ({ user }) => {
  return (
    <Card>
      <CardHeader
        sx={{ justifyContent: 'center' }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={
          <Typography sx={{
            marginRight: '55px'
          }}
          >
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          </Typography>
        }
        subheader={
          <Typography sx={{
            marginRight: '55px'
          }}
          >
            {user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Typography sx={{ fontWeight: 'bold' }}>Email:</Typography>
        <Typography sx={{ marginBottom: '10px' }}>{user.email}</Typography>

        <Typography sx={{ fontWeight: 'bold' }}>Phone Number:</Typography>
        <Typography sx={{ marginBottom: '10px' }}>{user.phone}</Typography>

        <Typography sx={{ fontWeight: 'bold' }}>ID Number:</Typography>
        <Typography sx={{ marginBottom: '10px' }}>{user.idNumber}</Typography>

        <Typography sx={{ fontWeight: 'bold' }}>Role:</Typography>
        <Typography sx={{ marginBottom: '10px' }}>
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'center', margin: '10px 0 10px 0' }}>
        <Link to={`/profile/edit/${user.id}`}>
          <Button
            sx={{ borderRadius: 10, padding: '8px 10px', boxShadow: 5 }}
            variant="contained"
            size="large"
          >
            Edit Account
          </Button>
        </Link>
        <Link to={`/profile/delete/${user.id}`}>
          <Button
            sx={{ borderRadius: 10, padding: '8px 10px', boxShadow: 5 }}
            variant="outlined"
            size="large"
          >
            Delete Account
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default UserInfo
