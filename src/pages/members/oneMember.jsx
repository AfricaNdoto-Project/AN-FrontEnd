import React, { useEffect, useState } from 'react'
import { getOneMember } from '../../services/membersService'
import { useParams, Link } from 'react-router-dom'
import { getDonorDonations } from '../../services/donorsService'
import useMember from '../../hooks/useMember'
import ProjectExpandCard from './ProjectExpandCard/ProjectExpandCard'
import DonationExpandCard from './DonationExpandCard/DonationExpandCard'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
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
  Button,
  Breadcrumbs,
  Box,
} from '@mui/material'
import { ExpandMore, ArrowBack } from '@mui/icons-material'

const OneMember = () => {
  const { memberInfo } = useMember()
  const { memberData, setMemberData } = memberInfo
  const [donationsList, setDonationsList] = useState([])
  const { id } = useParams()

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
        <Link to="/members" sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
          <Button>
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
            Go Back
          </Button>
        </Link>

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
        {memberData.role === 'donor' ||
        memberData.role === 'volunteer_donor' ? (
          <DonationExpandCard donationData={donationsList} />
        ) : null}
        {memberData.role === 'volunteer' ||
        memberData.role === 'volunteer_donor' ? (
          <ProjectExpandCard />
        ) : null}
      </Container>
    )
  }
}

export default OneMember
