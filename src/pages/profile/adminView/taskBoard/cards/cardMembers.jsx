import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'

const CardMembers = () => {


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
      <ManageAccountsIcon
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      />
      <Typography gutterBottom variant="h5" >
        Members
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Members info
      </Typography>
    </CardContent>
    <CardActions sx={{ alignSelf: 'center', justifyContent: 'center' }}>
      <Link to="/members">
        <Button size="small">Go</Button>
      </Link>
    </CardActions>
  </Card>
  )
}

export default CardMembers
