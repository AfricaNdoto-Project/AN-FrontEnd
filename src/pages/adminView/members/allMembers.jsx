import React, { useEffect } from 'react'
import { getMembersList } from '../../../services/membersService'
import {CardActions} from '@mui/material'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import useMember from '../../../hooks/useMember'
import { Card, CardContent, Container } from '@mui/material'

const AllMembers = () => {
  const { memberDataList } = useMember()
  const { membersList, setMembersList } = memberDataList

  useEffect(() => {
    const getMembers = async () => {
      const members = await getMembersList()
      setMembersList(members)
    }
    getMembers()
  }, [setMembersList])

  const users = membersList.map((member, idx) => {
    return (
      <Box key={idx} sx={{display:"flex"}} >
        <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', boxShadow: 4, height: 155, width: 250, margin: 1 }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              {member.name} {member.lastname}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {member.role}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={`/members/${member.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Button size="small" variant="contained" color="primary">
                SEE PROFILE
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    )
  })
  if (Object.keys(membersList).length !== 0) {
    return (
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          rowGap: 5,
          width: '100vw',
          height: '100vh',
          padding: 5
        }}
      >
        {users}
      </Container>
    )
   
  }
}
export default AllMembers
