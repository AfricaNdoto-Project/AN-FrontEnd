import { Container, Box } from "@mui/material"
import Donation from "../../donations/donations"
import Project from "../../projects/projects"
import { useState } from "react"
import { UserContext } from "../../../../context/userContext"
import { useContext } from "react"
import { getProfile } from "../../../../services/membersService"
import { getMyDonations } from "../../../../services/donorsService"
import { getProjects } from "../../../../services/projectsService"

const DonationsProjects = () => {
    const [donation, setDonation] = useState([])
    const [projects, setProjects] = useState([])
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        const getData = async () => {
          const result = await getProfile()
          const donations = await getMyDonations()
          const project = await getProjects()
          setProjects(project)
          setUser(result)
          setDonation(donations)
        }
        getData()
      }, [setUser])

    const displayProjects = () => {
        return <Project projects={projects} />
      }
    
      const displayDonations = () => {
        return <Donation donations={donation} />
      }
    
      const displayDonationsAndProjects = () => {
        return (
          <Container maxWidth={false} sx={{ borderColor: 'blue', display: 'flex' }}>
          <Box>
            <Donation donations={donation}></Donation>
          </Box>
          <Box>
            <Project projects={projects} />
          </Box>
        </Container>
        )
      }
const displayData = () => {
    if (user.role === 'donor') {
      if (donation.donations.length !== 0) {
        return <>{displayDonations()}</>
      } else {
        return <div>No hay donaciones relacionados a este miembro</div>
      }
    } else if (user.role === 'volunteer') {
      if (projects.length !== 0) {
        return displayProjects()
      } else {
        return <div>No hay proyectos relacionados a este miembro</div>
      }
    } else if (user.role === 'admin') {
     return   displayDonationsAndProjects()
    }
  }

  return (
    <>
        {displayData()}
    </>
  )
}

export default DonationsProjects