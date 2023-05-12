import React, { useEffect, useState } from 'react'
import { getOneMember } from '../../../services/membersService'
import { useParams } from 'react-router-dom'
import { getDonorDonations } from '../../../services/donorsService'
import useMember from '../../../hooks/useMember'
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Collapse,
  Container,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const OneMember = () => {
  const { memberInfo } = useMember()
  const { memberData, setMemberData } = memberInfo
  const [donationsList, setDonationsList] = useState([])
  const { id } = useParams()
  const [expandedDonation, setExpandedDonation] = useState(false)
  const [expandedProject, setExpandedProject] = useState(false)

  const handleDonationExpandClick = () => {
    setExpandedDonation(!expandedDonation)
  }

   const handleProjectExpandClick = () => {
     setExpandedProject(!expandedProject)
   }

  useEffect(() => {
    const getMember = async () => {
      const member = await getOneMember(id)
      setMemberData(member)
    }
    const getMyDonations = async () => {
      const donations = await getDonorDonations(id)
      setDonationsList(donations)
    }
    getMember()
    getMyDonations()
  }, [])



  const isDonor = donationsList.map((donation, idx) => {
    if (memberData.role !== 'volunteer' && Object.keys(donation).length !== 0) {
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

  if (Object.keys(memberData).length !== 0) {
    return (
      <Container
        maxWidth={false}
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '50%',
            alignSelf: 'center',
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {memberData.name} {memberData.lastname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {memberData.role}
            </Typography>
          </CardContent>
          <CardContent>
            <TableContainer>
              <Table size="small" aria-label="member details">
                <TableBody>
                  <TableRow>
                    <TableCell>ID Number:</TableCell>
                    <TableCell>{memberData.idNumber}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Email:</TableCell>
                    <TableCell>{memberData.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Phone:</TableCell>
                    <TableCell>{memberData.phone}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Address:</TableCell>
                    <TableCell>{memberData.address}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

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
                  <TableBody>
                    {isDonor}
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer>
                {/* <Table size="small" aria-label="donation history">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{isDonor}</TableBody>
                </Table> */}
              </TableContainer>
            </CardContent>
          </Collapse>
        </Card>
       {/*  <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            alignSelf: 'center',
            bgcolor: '#55616B',
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" component="div">
              Project Information
            </Typography>
            <IconButton
              aria-expanded={expandedProject}
              onClick={handleProjectExpandClick}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </CardContent>
          <Collapse in={expandedProject} timeout="auto" unmountOnExit>
            <CardContent>
              <TableContainer>
                <Table size="small" aria-label="project details">
                  <TableHead>
                    <TableRow>
                      <TableCell>Project Name</TableCell>
                      <TableCell>Donation Goal</TableCell>
                      <TableCell>Donation Progress</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {isProject.map((project) => (
                    <TableRow>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Goal</TableCell>
                      <TableCell>Progress</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Collapse>
        </Card> */}
      </Container>
    )
  }
}

export default OneMember
