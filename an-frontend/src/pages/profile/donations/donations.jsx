import Card from '@mui/material/Card'
import * as React from 'react'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import Collapse from '@mui/material/Collapse'
import { styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IconButton } from '@mui/material'

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
        return donations.donations.map((donation) => {
            return (
              <>
                <Typography paragraph>Amount:{ donation.amount }</Typography>
                <Typography paragraph>Type: { donation.type } </Typography>
              </>
            )
        })
  }
  return (
    <Card
      sx={{
        border: '1px solid black',
        maxWidth: 340,
        width: '500px',
        minBlockSize: '580px',
        display: 'flex',
        flexDirection: 'column',
        margin: '15px'
      }}
    >
      <CardHeader
        sx={{ margin: 0 }}
        title={
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>Donations</Typography>
          </Typography>
        }
      />
      <CardContent>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          { displayDonations() }
        </CardContent>
      </Collapse>
    </Card>
  )
}
