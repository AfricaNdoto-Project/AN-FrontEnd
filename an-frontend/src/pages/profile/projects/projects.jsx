import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'

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

export default function Project(projects) {
  const [expanded, setExpanded] = React.useState(false)
  const [count, setCount] = React.useState(0)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const displayProjects = () => {
    return projects.projects.map((project) => {
      return (
        <>
          <Box sx= {{
            border: '1px solid black',
            borderRadius: '4px',
            margin: '4px'
          }}>
            <Typography paragraph>Project</Typography>
            <Typography paragraph>Name:{project.name}</Typography>
            <Typography paragraph>Target: {project.target} </Typography>
          </Box>
        </>
      )
    })
  }

  return (
    <Card sx={{ maxWidth: 400, maxHeight: '580px', width: '250px' }}>
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
        <CardContent sx={{ height: 'auto' }}>{displayProjects()}</CardContent>
      </Collapse>
    </Card>
  )
}
