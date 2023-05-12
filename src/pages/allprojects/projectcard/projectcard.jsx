import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Grow } from '@mui/material'

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
          height: '35%',
          display: 'flex',
          flexDirection: 'column',
          margin: '20px',
          backgroundColor: '#F5FAFF',
        }}
      >
        <CardHeader
          sx={{ margin: 0, backgroundColor: '#E4C5A8' }}
          title={
            <Typography variant="body1" color="text.primary">
              <h2
                style={{
                  margin: 10,
                }}
              >
                {project.name}
              </h2>
            </Typography>
          }
          subheader={
            <Typography
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
              variant="body1"
              color="text.primary"
            >
              <h4
                style={{
                  margin: 0,
                }}
              >
                {project.target}
              </h4>
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
            <h4
              style={{
                margin: 0,
              }}
            >
              Description:
            </h4>{' '}
            <p
              style={{
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {project.description}
            </p>
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
              sx={{ margin: '8px', padding: '8px 48px' }}
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
