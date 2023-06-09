import React, { useEffect } from 'react'
import { getMembersList } from '../../services/membersService'
import { CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import { Box, Button, Typography, Grow } from '@mui/material'
import useMember from '../../hooks/useMember'
import { Card, CardContent, Container, Grid } from '@mui/material'
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
      <Grid key={idx}
      justifyContent='center'
     >
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Card
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 4,
              height: 'auto',
              padding: 2,
              width: 250,
              margin: 1,
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography  gutterBottom sx={{fontWeight: 'bold', fontSize: 20}}>
                {member.name}
              </Typography>
              <Typography gutterBottom sx={{fontWeight: 'bold'}}>
               {member.lastname}
              </Typography>
              <Divider sx={{marginBottom: 0.2}}/>
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
                  }}
                >
                  SEE PROFILE
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grow>
      </Grid>
    )
  })
  if (Object.keys(membersList).length !== 0) {
    return (
      <Grid
      container
      justifyContent='center'
      sx={{bgcolor:'#F5FAFF'}}
      >
      <Grid
        container item
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        maxWidth="50%"
        zeroMinWidth
        columns={2}
        sx={{
          flexGrow: 1,
          padding: 0,
          overflow: { xs: 'scroll', sm: 'scroll', md: 'scroll' },
        }}
      >
        {users}
      </Grid>
      </Grid>
    )
  }
}
export default AllMembers
