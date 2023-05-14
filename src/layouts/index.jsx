import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Grid } from '@mui/material'

const Main = () => {
  return (
    <>
    <Grid>
      <Header />
      <Outlet />
      <Footer />
    </Grid>
    </>
  )
}

export default Main
