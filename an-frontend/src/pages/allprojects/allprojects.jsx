import React from 'react'

import { useState, useEffect } from 'react'
import RecipeReviewCard from './projectcard/projectcard'

import getAllProjects from '../../services/allprojectsService'

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
        return allProjects.map (elem => {
            return ( 
                <>
                 <RecipeReviewCard key={ elem.id } project={ elem } />
                </>
                 )
        })
    } 
    // console.log(allProjects)
  return (
    <div>
      <h1>Hello</h1>
      {displayAllProjects()}
    </div>
  )
}

export default AllProjects
