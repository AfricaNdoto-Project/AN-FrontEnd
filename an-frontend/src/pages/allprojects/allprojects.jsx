import { useState, useEffect } from 'react'
import RecipeReviewCard from './projectcard/projectcard'
import { Box } from '@mui/material'
import { CircularProgress } from '@mui/material'
import Loading from '../../components/loading/loading'

import { getAllProjects } from '../../services/projectsService'

const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([])

  useEffect(() => {
    getProjectsData()
  }, [])

  const getProjectsData = async () => {
    const result = await getAllProjects()
    setAllProjects(result)
  }

  const displayAllProjects = () => {
    return allProjects.map((elem) => {
      return (
        <>
          <RecipeReviewCard key={elem.id} project={elem} />
        </>
      )
    })
  }
  if (allProjects.length !== 0) {
    return <div>{displayAllProjects()}</div>
  } else {
    return <Loading />
  }
}

export default AllProjects
