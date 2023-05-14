import { Hidden, Container, Box, Divider, Tabs, Grid } from '@mui/material'
import CardMembers from './cards/cardMembers'
import CardDonations from './cards/cardDonations'
import CardProject from './cards/cardProject'
import CardEvent from './cards/cardEvent'
import CardProfessional from './cards/cardProfessional'
import CardEquipment from './cards/cardEquipment'
import CardCalendar from './cards/cardCalendar'
import { useState } from 'react'
import { Grow } from '@mui/material'

const TaskBoard = () => {
  const [checked] = useState(true)

  return (
    <>
      <Hidden lgDown>
        <Grid container spacing={3}>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <CardMembers />
              </Grid>
            }
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <CardDonations />
              </Grid>
            }
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <CardProject />
              </Grid>
            }
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <CardEvent />
              </Grid>
            }
          </Grow>

          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <CardProfessional />
              </Grid>
            }
          </Grow>

          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <CardEquipment />
              </Grid>
            }
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                <CardCalendar />
              </Grid>
            }
          </Grow>
        </Grid>
      </Hidden>

      <Hidden lgUp>
        <Grid container spacing={1} width='100%' margin='10px'>
          <Tabs variant="scrollable" scrollButtons="auto" value={false}>
            <Grid item
            minWidth={'70%'} marginRight='8px'>
              <CardMembers />
            </Grid>

            <Grid item minWidth={'70%'} marginRight='8px'>
              <CardDonations />
            </Grid>

            <Grid item minWidth={'70%'} marginRight='8px' >
              <CardProject />
            </Grid>

            <Grid item minWidth={'70%'} marginRight='8px' >
              <CardEvent />
            </Grid>

            <Grid item minWidth={'70%'} marginRight='8px' >
              <CardProfessional />
            </Grid>

            <Grid item minWidth={'70%'} marginRight='8px' >
              <CardEquipment />
            </Grid>

            <Grid item minWidth={'70%'} marginRight='8px'>
              <CardCalendar />
            </Grid>
          </Tabs>
        </Grid>
      </Hidden>
    </>
  )
}

export default TaskBoard
