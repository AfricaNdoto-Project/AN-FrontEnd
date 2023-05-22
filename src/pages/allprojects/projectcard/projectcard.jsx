import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Grow,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [checked] = useState(true)

  return (
    <Grow
      in={checked}
      style={{ transformOrigin: '0 0 0' }}
      {...(checked ? { timeout: 900 } : {})}
    >
      <Card
        sx={{
          width: 365,
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          margin: '20px 10px 10px 10px',
          backgroundColor: 'white',
        }}
      >
        <CardHeader
          sx={{ backgroundColor: '#E4C5A8', height: '100px' }}
          title={
            <Typography sx={{ fontWeight: 'bold' }}>{project.name}</Typography>
          }
          subheader={<Typography>{project.target}</Typography>}
        />
        <CardContent>
          <Typography sx={{ fontWeight: 'bold' }}>Description:</Typography>
          <Typography
            sx={{
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {project.description}
          </Typography>
          <Link
            to="/project"
            state={{ data: project }}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: '8px', padding: '8px 24px' }}
            >
              See more
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Grow>
  )
}

export default ProjectCard
