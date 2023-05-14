import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'

const CardProfessional = () => {

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
      <SupervisorAccountIcon
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      />
      <Typography gutterBottom variant="h5">Professions</Typography>
      <Typography variant="body2" color="text.secondary">
        Professions
      </Typography>
    </CardContent>
    <CardActions sx={{ alignSelf: 'center', justifyContent: 'center' }}>
      <Link to="/professions">
        <Button size="small">Go</Button>
      </Link>
    </CardActions>
  </Card>
  )
}

export default CardProfessional
