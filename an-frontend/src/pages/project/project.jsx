
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

import RecipeReviewCard from "./fullinfocard/fullinfocard";

const Project = () => {
  const location = useLocation()
  const data = location.state?.data

  const displayProject = () => {
    return (
      <>
        <RecipeReviewCard project={ data }/>
      </>
    )
  } 

  if(!data) {
   return (
    <>
    <Navigate to='/allprojects' replace={ true }/>
    </>
   ) 
  } else {
   return (
   <div>
      { displayProject() }
    </div>
   )
  }
}

export default Project
