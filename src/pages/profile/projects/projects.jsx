import * as React from 'react'
import {
  styled,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Grid,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function Project({ projects }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const displayProjects = () => {
    if (Array.isArray(projects) && projects.length !== 0) {
      return projects.map((project, index = project.id) => {
        return (
          <Grid key={index}>
            <Typography paragraph>Project</Typography>
            <Typography paragraph>Name:{project.name}</Typography>
            <Typography paragraph>Target: {project.target} </Typography>
          </Grid>
        )
      })
    } else {
      return null
    }
  }

  return (
      <Card>
        <CardHeader title="Projects" />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ height: 'auto' }}>
            {displayProjects()}
          </CardContent>
        </Collapse>
      </Card>
  )
}
