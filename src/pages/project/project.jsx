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
        <Grid item>
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
    return (
      <Grid container justifyContent="center">
        {displayProject()}
      </Grid>
    )
  }
}

export default Project
