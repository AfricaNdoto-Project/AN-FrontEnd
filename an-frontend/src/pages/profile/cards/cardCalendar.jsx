import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Link } from 'react-router-dom'


const CardCalendar = () => {

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
      <CalendarMonthIcon
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          alignSelf: 'center',
          justifyContent: 'center',
          
        }}
      />
      <Typography gutterBottom variant="h5" component="div">
        Calendar
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Calendar
      </Typography>
    </CardContent>
    <CardActions sx={{ alignSelf: 'center', justifyContent: 'center' }}>
      <Link to="/calendar">
        <Button size="small">Go</Button>
      </Link>
    </CardActions>
  </Card>
  )
}

export default CardCalendar
