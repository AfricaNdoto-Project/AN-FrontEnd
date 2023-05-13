import { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Collapse,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const DonationExpandCard = ({ donationData }) => {
  const [expandedDonation, setExpandedDonation] = useState(false)

  const handleDonationExpandClick = () => {
    setExpandedDonation(!expandedDonation)
  }

  const donations = donationData.map((donation, idx) => {
    if (Object.keys(donation).length !== 0) {
      return (
        <TableRow key={idx}>
          <TableCell> {donation.amount}</TableCell>
          <TableCell>{donation.type}</TableCell>
          <TableCell>{donation.productId}</TableCell>
        </TableRow>
      )
    } else {
      null
    }
  })

  const haveDonations = () => {
    if (donations.length !== 0) {
      return (
        <CardContent>
          <TableContainer>
            <Table size="small" aria-label="donor details">
              <TableHead>
                <TableRow>
                  <TableCell>Amount</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>productId</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{donations}</TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      )
    } else {
      return (
        <CardContent>
          <Typography>You dont have any donations</Typography>
        </CardContent>
      )
    }
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" component="div">
          Donor Information
        </Typography>
        <IconButton
          aria-expanded={expandedDonation}
          onClick={handleDonationExpandClick}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardContent>
      <Collapse in={expandedDonation} timeout="auto" unmountOnExit>
        {haveDonations()}
      </Collapse>
    </Card>
  )
}

export default DonationExpandCard
