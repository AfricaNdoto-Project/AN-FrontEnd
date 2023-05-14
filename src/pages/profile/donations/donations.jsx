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

export default function Donation({ donations }) {
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const displayDonations = () => {
    if (Array.isArray(donations) && donations.length !== 0) {
      return donations.donations.map((donation) => {
        return (
          <Grid key={donation.id}>
            <Typography>Donation</Typography>
            <Typography paragraph>Amount: {donation.amount}</Typography>
            <Typography paragraph>Type: {donation.type}</Typography>
          </Grid>
        )
      })
    } else {
      return <Typography>You dont have donations</Typography>
    }
  }

  return (
    <Card>
      <CardHeader title="Donations" />
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
        <CardContent sx={{ height: 'auto', overflow: 'scroll' }}>
          {displayDonations()}
        </CardContent>
      </Collapse>
    </Card>
  )
}
