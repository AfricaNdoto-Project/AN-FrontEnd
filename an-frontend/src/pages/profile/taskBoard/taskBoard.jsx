import { Hidden, Container, Box, Divider, Tabs } from "@mui/material"
import CardMembers from "../cards/cardMembers"
import CardDonations from "../cards/cardDonations"
import CardProject from "../cards/cardProject"
import CardEvent from "../cards/cardEvent"
import CardProfessional from "../cards/cardProfessional"
import CardEquipment from "../cards/cardEquipment"
import CardCalendar from "../cards/cardCalendar"
import {Grow} from "@mui/material"
import { useState } from "react"

const TaskBoard = () => {
  const [checked] = useState(false);
  const child = (
    <Hidden mdDown>
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        alignContent: { xl: 'flex-start' },
        flexWrap: 'wrap',
        columnGap: { lg: 4, xl: 5 },
        rowGap: { lg: 30, xl: 10 },
        borderColor: 'white',
        width: '80%',
        height: '85%',
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 3.5,
        margin: 0,
        overflow: { lg: 'scroll', xl: 'clip' },
      }}
    >
      <Box
        sx={{
          width: { lg: '270px', xl: '370px' },
          height: { lg: '180px', xl: '300px' },
        }}
      >
        <CardMembers />
      </Box>
      <Box
        sx={{
          width: { lg: '270px', xl: '370px' },
          height: { lg: '180px', xl: '300px' },
        }}
      >
        <CardDonations />
      </Box>
      <Box
        sx={{
          width: { lg: '270px', xl: '370px' },
          height: { lg: '180px', xl: '300px' },
        }}
      >
        <CardProject />
      </Box>
      <Box
        sx={{
          width: { lg: '270px', xl: '370px' },
          height: { lg: '180px', xl: '300px' },
        }}
      >
        <CardEvent />
      </Box>
      <Box
        sx={{
          width: { lg: '270px', xl: '370px' },
          height: { lg: '180px', xl: '300px' },
        }}
      >
        <CardProfessional />
      </Box>
      <Box
        sx={{
          width: { lg: '270px', xl: '370px' },
          height: { lg: '180px', xl: '300px' },
        }}
      >
        <CardEquipment />
      </Box>
      <Box
        sx={{
          width: { lg: '270px', xl: '370px' },
          height: { lg: '180px', xl: '300px' },
        }}
      >
        <CardCalendar />
      </Box>
    </Container>
  </Hidden>
  )

  return (
    <>
         <Grow
    in={checked}
  >
    {child}
  </Grow>

      <Hidden lgUp>
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            justifyContent: 'space-around',
            gap: 2,
            padding: 0,
            height: { xs: '100', sm: '600px', md: '600px' },
            width: { xs: '100', sm: '460px', md: '460px' },
            margin: 0,
            alignSelf: 'center',
            flexWrap: {
              xs: 'nowrap',
              sm: 'nowrap',
              md: 'wrap',
              lg: 'wrap',
              xl: 'wrap',
            },
          }}
        >
          <Tabs variant="scrollable" scrollButtons="auto" value={7}>
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardMembers />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardDonations />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardProject />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardEvent />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardProfessional />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardEquipment />
            </Box>
            <Divider sx={{ margin: 0.5 }} />
            <Box sx={{ display: 'flex', width: 300, height: 400 }}>
              <CardCalendar />
            </Box>
          </Tabs>
        </Container>
      </Hidden>
    </>
  )
}

export default TaskBoard
