import { 
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@mui/material'

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
          <h6>Description: </h6> <p>{ project.description }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h6>Objective: </h6> <p>{ project.objective }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h6>Budget: </h6> <p>{ project.budget }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h6>Collect: </h6> <p>{ project.collect }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h6>Staff: </h6> <p>{ project.professionals[0].name }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h6>Equipment: </h6> <p>{ project.equipment[0].name }</p> 
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