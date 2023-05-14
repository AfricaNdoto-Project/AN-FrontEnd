import { Button, Grid } from "@mui/material"
import React, { useState } from "react"
import TaskBoard from "./taskBoard/taskBoard"
import MemberProfile from "../memberView/memberProfile"

const AdminProfile = () => {
  const [active, setIsActive] = useState('donations&projects')

  const toggleView = () =>
    active === 'donations&projects' ? (
      <MemberProfile/>
    ) : (
      <TaskBoard />
    )

  return (
    <React.Fragment>
      <Grid  >
        <Button
          variant="outlined"
          size="medium"
          sx={{ borderRadius: 10, padding: '8px 10px', boxShadow: 5, margin: '8px' }}
          onClick={() => setIsActive('donations&projects')}
        >
          General
        </Button>
        <Button
          variant="outlined"
          size="medium"
          sx={{ borderRadius: 10, padding: '8px 10px', boxShadow: 5, margin: '8px' }}
          onClick={() => setIsActive('taskboard')}
        >
          TaskBoard
        </Button>
      </Grid>
      <Grid height='100%'>
        {toggleView()}
      </Grid>
    </React.Fragment>
  )
}

export default AdminProfile