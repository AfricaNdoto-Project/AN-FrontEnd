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
          <ProjectCard key={elem.id} project={elem} />
        </>
      )
    })
  }
  if (allProjects.length !== 0) {
    return (
      <Grid
        maxWidth={false}
        container
        spacing xs={1} sm={1} md={2} lg={2} xl={3}
        justifyContent="center"
        margin="10px 0 10px 0"
      >
        {displayAllProjects()}
      </Grid>
    )
  } else {
    return <Loading />
  }
}

export default AllProjects
