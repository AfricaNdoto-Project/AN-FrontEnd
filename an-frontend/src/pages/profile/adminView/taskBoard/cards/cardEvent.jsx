import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import EventNoteIcon from '@mui/icons-material/EventNote'
const CardEvent = () => {

  return (
<Card sx={{ width: '100%', height: '100%' }}>
    <CardContent
      sx={{
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <EventNoteIcon
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      />
      <Typography gutterBottom variant="h5" component="div">
        Events
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Events
      </Typography>
    </CardContent>
    <CardActions sx={{ alignSelf: 'center', justifyContent: 'center' }}>
      <Link to="/events">
        <Button size="small">Go</Button>
      </Link>
    </CardActions>
  </Card>
  )
}

export default CardEvent
