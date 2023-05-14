import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import FullInforCard from './fullinfocard/fullinfocard'
import { Grid } from '@mui/material'

const Project = () => {
  const location = useLocation()
  const data = location.state?.data

  const displayProject = () => {
    return (
      <>
        <Grid>
          <FullInforCard project={data} />
        </Grid>
      </>
    )
  }

  if (!data) {
    return (
      <>
        <Navigate to="/allprojects" replace={true} />
      </>
    )
  } else {
    return <div>{displayProject()}</div>
  }
}

export default Project
