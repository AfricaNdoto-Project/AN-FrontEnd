import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Container } from '@mui/material'

const Main = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width:{sm:'100vw', xs: '100vw'},
        height: '100%',
        paddingRigth: { xs: '0px', sm: '0px', md: '0px' },
        margin: '0px',
        paddingLeft: { xs: '0px', sm: '0px', md: '0px' },
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Main
