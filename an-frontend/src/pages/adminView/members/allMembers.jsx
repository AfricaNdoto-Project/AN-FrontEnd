import React, { useEffect } from 'react'
import { getMembersList } from '../../../services/membersService'

import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import useMember from '../../../hooks/useMember'
import { Card, CardContent } from '@mui/material'

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
      <Box key={idx} display="flex" alignItems="center" height="100%">
        <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography>{member.name}</Typography>
            <Typography>{member.lastname}</Typography>
            <Typography>{member.role}</Typography>
          </CardContent>
          <Link to={`/adminView/members/${member.id}`}>
            <Button>SEE PROFILE</Button>
          </Link>
        </Card>
      </Box>
    )
  })
  if (Object.keys(membersList).length !== 0) {
    return <>{users}</>
  }
}
export default AllMembers
