import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Grid,
  Grow,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [checked] = useState(true)

  return (
    <Grid 
    item xs={12} sm={12} md={6} lg={6} xl={4}
    maxWidth={false}
    >
      <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 900 } : {})}
      >
        <Card
          sx={{
            width: 400,
            backgroundColor: '#F5FAFF',
          }}
        >
          <CardHeader
            sx={{ backgroundColor: '#E4C5A8' }}
            title={<Typography variant="h6">{project.name}</Typography>}
            subheader={<Typography>{project.target}</Typography>}
          />
          <CardContent>
            <Typography variant="h6">Description:</Typography>
            <Typography>
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
                sx={{ margin: '8px', padding: '8px 24px' }}
              >
                See more
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grow>
    </Grid>
  )
}

export default ProjectCard
