import { useState } from 'react'
import { useEffect } from 'react'
import { getMyDonations } from '../../../services/donorsService'
import { getProjects } from '../../../services/projectsService'
import Project from '../projects/projects'
import Donation from '../donations/donations'
import { Container } from '@mui/material'
import { Box } from '@mui/material'

const MemberProfile = () => {
  const [donation, setDonation] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getData = async () => {
      const donations = await getMyDonations()
      const project = await getProjects()
      setProjects(project)
      setDonation(donations)
    }
    getData()
  }, [])


  const displayDonationsAndProjects = () => {
    
    return (
      <>
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        >
          <Box>
          <Donation donations={donation} />
          </Box>
        </Container>
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        >
          <Box>
            <Project projects={projects} />
          </Box>
        </Container>
      </>
    )
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: '10px',
        display: 'flex',
        width: '80%',
        height: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '1300px',
          xl: '100%',
        },
        border: 2,
        margin: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
        },
      }}
    >
      <Container
        sx={{
          width: { sx: '100%', sm: '50%', md: '60%', lg: '100', xl: '80%' },
          height: { lg: '85%', xl: '90%' },
          padding: 3,
          marginLeft: 0,
          margin: 0,
          display: 'flex',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'center',
            width: '100%',
            height: { lg: '98.5%', xl: '1090px' },
          }}
        >
          {displayDonationsAndProjects()}
        </Box>
      </Container>
    </Container>
  )
}

export default MemberProfile
