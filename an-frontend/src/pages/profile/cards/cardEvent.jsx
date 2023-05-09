import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import EventNoteIcon from '@mui/icons-material/EventNote'

const CardEvent = () => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            alignSelf: 'center',
            justifyContent: 'center',
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
          Events
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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