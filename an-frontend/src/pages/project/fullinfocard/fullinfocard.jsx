import { 
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@mui/material'
import { Link } from 'react-router-dom'

export default function FullInfoCard({ project }) {
  return (
    <Card 
    sx={{ 
      maxWidth: '80 vw', 
      display:'flex', 
      flexDirection:'column',
      margin: '20px',
      backgroundColor: 'hsla(30, 100%, 98%, 1)'
      }}>

      <CardHeader
        sx={{margin: 0}}
       
        title={<Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
              <h3>{(project.name)}</h3> 
              </Typography>}
        subheader={<Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
                  <h5>{(project.target)}</h5> 
                  </Typography>}
      />
      <CardContent>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <p>Description: { project.description }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h4>Objective: { project.objective }</h4> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <p>Budget: { project.budget }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <p>Collect: { project.collect }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <p>Staff: { project.professionals[0].name }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <p>Equipment: { project.equipment[0].name }</p> 
        </Typography>
        {/* <Link to='/project' state={{data: project}} >
          <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
            <h4>See more</h4> 
          </Typography>
        </Link> */}
      </CardContent>

    </Card>
  )
}