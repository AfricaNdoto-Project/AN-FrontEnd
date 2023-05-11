import { useState, useEffect } from 'react'
import ProjectCard from './projectcard/projectcard'
import { Container } from '@mui/material'
import Loading from '../../components/loading/loading'
import { getAllProjects } from '../../services/projectsService'

import { Grow } from '@mui/material';

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
    return <Container
          sx={{ 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: '50px',
            margin: 0,
            height: '100vh',
            width: '100vw',
          }}
          maxWidth={false}
          >
            {displayAllProjects()}
          </Container>
  } else {
    return <Loading />
  }
}

export default AllProjects
