import { 
  Card, 
  CardHeader, 
  CardContent, 
  Typography, 
  Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ 
      width: 340,
      height: 350,
      display: 'flex', 
      flexDirection: 'column',
      margin: '20px',
      backgroundColor: 'hsla(29, 93%, 89%, 1)' }}>
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
          }}
          variant="body2"
          color="text.secondary"
        >
          <h4>Description: </h4> <p>{project.description}</p>
        </Typography>
        <Link to="/project" state={{ data: project }}
          style = {{
          textDecoration:'none',
          }} 
        >
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
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

export default ProjectCard

