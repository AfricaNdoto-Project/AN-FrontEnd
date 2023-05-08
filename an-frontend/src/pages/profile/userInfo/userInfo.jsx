import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'


export default function RecipeReviewCard({ user }) {
  return (
    <Card sx={{ maxWidth: 340, display:'flex', flexDirection:'column'}}>
      <CardHeader
        sx={{margin: 0}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            { (user.name).charAt(0).toUpperCase() }
          </Avatar>
        }
        title={<Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
              <h3>{(user.name).charAt(0).toUpperCase() + (user.name.slice(1))}</h3> 
              </Typography>}
        subheader={<Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
                  <h3>{(user.lastname).charAt(0).toUpperCase() + (user.lastname.slice(1))}</h3> 
                  </Typography>}
      />
      <CardContent>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h3>Email: </h3> <p>{ user.email }</p> 
        </Typography>
        <Typography sx={{isplay: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h3>Phone Number:: </h3> <p>{ user.phone }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
           <h3>ID Number:: </h3> <p>{ user.idNumber }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h3>Role: </h3> <p>{(user.role).charAt(0).toUpperCase() + (user.role.slice(1))}</p> 
        </Typography>
      </CardContent>
    </Card>
  )
}