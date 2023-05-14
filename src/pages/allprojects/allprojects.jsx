import { useState, useEffect } from 'react'
import ProjectCard from './projectcard/projectcard'
import { Grid } from '@mui/material'
import Loading from '../../components/loading/loading'
import { getAllProjects } from '../../services/projectsService'

const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([])

  useEffect(() => {
    const getProjectsData = async () => {
      const result = await getAllProjects()
      setAllProjects(result)
    }
    getProjectsData()
  }, [])

  const displayAllProjects = () => {
    return allProjects.map((elem) => {
      return (
        <>
          <Grid item width="auto">
            <ProjectCard key={elem.id} project={elem} />
          </Grid>
        </>
      )
    })
  }
  if (allProjects.length !== 0) {
    return (
      <Grid container spacing={1} height="100vh" justifyContent="center">
        {displayAllProjects()}
      </Grid>
    )
  } else {
    return (
      <Grid container justifyContent="center">
        <Loading />
      </Grid>
    )
  }
}

export default AllProjects
