import { Box, Button, Divider, Container } from "@mui/material"
import React, { useState } from "react"
import TaskBoard from "./taskBoard/taskBoard"
import { useEffect } from "react"
import { getMyDonations } from "../../../services/donorsService"
import { getProjects } from "../../../services/projectsService"
import Donation from "../donations/donations"
import Project from "../projects/projects"

const AdminProfile = () => {
  const [active, setIsActive] = useState('donations&projects')
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
  }, [setProjects, setDonation])

  const displayDonationsAndProjects = () => {
    return (
      <React.Fragment>
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            alignContent: { xl: 'flex-start' },
            flexWrap: 'wrap',
            columnGap: { lg: 4, xl: 5 },
            rowGap: { lg: 10, xl: 10 },
            width: '100%',
            height: '100%',
            alignSelf: 'center',
            justifyContent: 'center',
            padding: 3.5,
            margin: 0,
            overflow: { lg: 'scroll', xl: 'clip' },
          }}
        >
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        >
          <Box>
            <Donation donations={donation}></Donation>
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
        </Container>
      </React.Fragment>
    )
  }

  const toggleView = () =>
    active === 'donations&projects' ? (
      displayDonationsAndProjects()
    ) : (
      <TaskBoard />
    )

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '30px',
          width: '100%',
          marginTop: 2,
          justifyContent: 'center',
        }}
      >
        <Button
          disabled={false}
          variant="filledTonal"
          size="small"
          sx={{ borderRadius: 10, height: 25, fontSize: 12, boxShadow: 5 }}
          onClick={() => setIsActive('donations&projects')}
        >
          General
        </Button>
        <Divider sx={{ margin: 3 }} />
        <Button
          disabled={false}
          variant="filledTonal"
          size="small"
          sx={{ borderRadius: 10, height: 25, fontSize: 12, boxShadow: 5 }}
          onClick={() => setIsActive('taskboard')}
        >
          TaskBoard
        </Button>
      </Box>
      <Container
        maxWidth={false}
        sx={{
          padding: '10px',
          display: 'flex',
          width: '100%',
          height: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '1300px',
            xl: '100%',
          },
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
        <Divider sx={{ margin: 1 }} />
        {toggleView()}
      </Container>
    </>
  )
}

export default AdminProfile