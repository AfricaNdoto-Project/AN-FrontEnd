import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import logoProfessional from '../../../public/assets/profileAdmin/logoProfessional.png'
import { Link } from 'react-router-dom'

const CardProfessional = () => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={logoProfessional}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Professions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: 'center', justifyContent: 'center' }}>
        <Link to='/professions'>
          <Button size="small">Go</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default CardProfessional