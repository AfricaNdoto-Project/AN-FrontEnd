import React, { useEffect } from 'react'
import { getMembersList } from '../../../services/membersService'
import {CardActions} from '@mui/material'
import { Link } from 'react-router-dom'
import { Box, Button, Typography, Grow } from '@mui/material'
import useMember from '../../../hooks/useMember'
import { Card, CardContent, Container } from '@mui/material'
import { useState } from 'react'

const AllMembers = () => {
  const [checked] = useState(true)
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
      <>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Box key={idx} sx={{ display: 'flex', height:'20%' }}>
            <Card
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 4,
                height: 155,
                width: 250,
                margin: 1,
                borderRadius: 3
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {member.name} {member.lastname}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {member.role}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Link
                  to={`/members/${member.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{
                      bgcolor: '#2468A0',
                      fontSize: '12px',
                      '&:hover':{
                        fontSize:'15px'
                      }
                    }}
                  >
                    SEE PROFILE
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Box>
        </Grow>
      </>
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
        height: '100vh',
        width: '100%',
        padding: 6,
        border: 2,
      }}
    >
      {/*USE GRID COMPONENT, ITS BETTER*/}
      <Container
        maxWidth={false}
        sx={{
          display: 'grid flex',
          flexWrap: 'wrap',
          height: '100%',
          width: { lg: '70%', xl: '40%' },
          borderRadius: 2,
          boxShadow: 10,
          bgcolor: '#B37943',
          justifyContent: 'center',
          gap: '0 50px',
          gridTemplateColumns: 'repeat(auto-fit, 1fr)',
          margin: 0,
          padding: 3,
          overflow: 'scroll',
        }}
      >
        {users}
      </Container>
    </Container>
  )
}



   
}
export default AllMembers
