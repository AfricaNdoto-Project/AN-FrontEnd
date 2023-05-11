import { Box, Button, Divider, Container } from "@mui/material"
import { useState } from "react"
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
      <Container maxWidth={false} sx={{ borderColor: 'blue', display: 'flex', width: '100%' }}>
        <Box>
          <Donation donations={donation}></Donation>
        </Box>
        <Box>
          <Project projects={projects} />
        </Box>
      </Container>
    )
  }

    const toggleView = () => {
        return (
          <>
            {active === 'donations&projects' && displayDonationsAndProjects()}
            {active === 'taskboard' && <TaskBoard />}
          </>
        )
      }

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
            border: 2,
            margin: 0,
            borderColor: 'green',
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
          {/*   */}
          <Divider sx={{ margin: 1 }} />
          {toggleView()}
        </Container>

    </>
  )
}

export default AdminProfile