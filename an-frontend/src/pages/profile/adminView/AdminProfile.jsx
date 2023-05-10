import { Box, Button, Divider, Container } from "@mui/material"
import { useState } from "react"
import UserInfo from "../userInfo/userInfo"
import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import TaskBoard from "./taskBoard/taskBoard"
import DonationsProjects from "./DonationsProjects.jsx/DonationsProjects"

const AdminProfile = () => {
    const [active, setIsActive] = useState('donations&projects')
    const { user } = useContext(UserContext)

    const toggleView = () => {
        return (
          <>
            {active === 'donations&projects' && <DonationsProjects/>}
            {active === 'taskboard' && <TaskBoard />}
          </>
        )
      }

  return (
   <>
    <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '30px',
            width: '100%',
            marginTop: 2,
            justifyContent: 'center',
          }}
        >
          <Button
            disabled={false}
            variant="filledTonal"
            size="small"
            sx={{ borderRadius: 10, height: 25, fontSize: 12, boxShadow: 5 }}
            onClick={() => setIsActive('donations&projects')}
          >
            General
          </Button>
          <Divider sx={{ margin: 3 }} />
          <Button
            disabled={false}
            variant="filledTonal"
            size="small"
            sx={{ borderRadius: 10, height: 25, fontSize: 12, boxShadow: 5 }}
            onClick={() => setIsActive('taskboard')}
          >
            TaskBoard
          </Button>
        </Box>
        <Container
          maxWidth={false}
          sx={{
            padding: '10px',
            display: 'flex',
            width: '100%',
            height: {
              xs: '100%',
              sm: '100%',
              md: '100%',
              lg: '1300px',
              xl: '100%',
            },
            border: 2,
            margin: 0,
            borderColor: 'green',
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
            },
          }}
        >
          <Container
            sx={{
              width: { sx: '100%', sm: '50%', md: '60%', lg: '30%', xl: '20%' },
              height: { lg: '85%', xl: '90%' },
              padding: 3,
              marginLeft: 0,
              borderColor: 'pink',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignSelf: 'center',
                width: '100%',
                borderColor: 'green',
                height: { lg: '98.5%', xl: '1090px' },
              }}
            >
    <UserInfo sx={{ height: '25%' }} user={user} />
</Box>
          </Container>
          <Divider sx={{ margin: 1 }} />
          {toggleView()}
</Container>
</>
  )
}

export default AdminProfile