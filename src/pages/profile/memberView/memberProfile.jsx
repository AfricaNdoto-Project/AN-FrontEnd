import { useState } from 'react'
import { useEffect } from 'react'
import { getMyDonations } from '../../../services/donorsService'
import { getProjects } from '../../../services/projectsService'
import Project from '../projects/projects'
import Donation from '../donations/donations'
import { Grid } from '@mui/material'

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
        <Grid marginBottom="10px">
          <Donation donations={donation} />
        </Grid>
        <Grid marginBottom="10px">
          <Project projects={projects} />
        </Grid>
      </>
    )
  }

  return <>{displayDonationsAndProjects()}</>
}

export default MemberProfile
