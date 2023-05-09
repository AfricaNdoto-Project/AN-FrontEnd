import { 
  Card, 
  CardHeader, 
  CardContent, 
  Typography, 
  Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function RecipeReviewCard({ project }) {
  return (
    <Card sx={{ 
      maxWidth: 340, 
      display: 'flex', 
      flexDirection: 'column',
      marginBottom: '20px',
      backgroundColor: 'hsla(30, 100%, 98%, 1)' }}>
      <CardHeader
        sx={{ margin: 0 }}
        title={
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'space-around',
            }}
            variant="body2"
            color="text.secondary"
          >
            <h3>{project.name}</h3>
          </Typography>
        }
        subheader={
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'space-around',
            }}
            variant="body2"
            color="text.secondary"
          >
            <h5>{project.target}</h5>
          </Typography>
        }
      />
      <CardContent>
        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-around',
          }}
          variant="body2"
          color="text.secondary"
        >
          <h4>Description: </h4> <p>{project.description}</p>
        </Typography>
        <Link to="/project" state={{ data: project }}>
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'space-around',
            }}
            variant="body2"
            color="text.secondary"
          >
            <Button variant="contained" color="primary">See more</Button>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
