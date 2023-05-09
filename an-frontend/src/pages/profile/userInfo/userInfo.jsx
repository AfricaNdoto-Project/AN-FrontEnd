import Card from '@mui/material/Card'
import * as React from 'react'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import Collapse from '@mui/material/Collapse'
import { styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IconButton } from '@mui/material'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function RecipeReviewCard({ user }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Card
      sx={{
        border: '1px solid black',
        maxWidth: 340,
        width: '500px',
        minBlockSize: '580px',
        display: 'flex',
        flexDirection: 'column',
        margin: '15px',
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
              width: '80px'
            }}
            variant="body2"
            color="text.secondary"
          >
            <Typography
              sx={{
                marginLeft: '75px',
              }}
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
              width: '80px'
            }}
            variant="body2"
            color="text.secondary"
          >
            <Typography
              sx={{
                marginLeft: '75px',
              }}
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
          <h3>Phone Number:: </h3> <p>{user.phone}</p>
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
          <h3>ID Number:: </h3> <p>{user.idNumber}</p>
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
          <h3>Role: </h3>{' '}
          <p>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
        </Typography>
      </CardContent>
    </Card>
  )
}
