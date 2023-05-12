import { useState, useEffect } from 'react'
import ProjectCard from './projectcard/projectcard'
import { Container, Grid } from '@mui/material'
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
          <ProjectCard key={elem.id} project={elem} />
        </>
      )
    })
  }
  if (allProjects.length !== 0) {
    return (
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          marginBottom: '50px',
          margin: 0,
          height: '100vh',
          width: '100vw',}}
      >
        {displayAllProjects()}
      </Grid>
    )
  } else {
    return <Loading />
  }
}

export default AllProjects
