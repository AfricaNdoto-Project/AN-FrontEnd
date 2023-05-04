import * as React from 'react'
import { 
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@mui/material'
import { Link } from 'react-router-dom'

export default function RecipeReviewCard({ project }) {
  return (
    <Card sx={{ maxWidth: 340, display:'flex', flexDirection:'column'}}>
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
          <h4>Description: </h4> <p>{ project.description }</p> 
        </Typography>
        <Link to='/project' >
          <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
            <h4>See more</h4> 
          </Typography>
        </Link>
      </CardContent>

    </Card>
  )
}
