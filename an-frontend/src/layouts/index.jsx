import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Container } from '@mui/material'

const Main = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100%',
        paddingRigth: { sm: '0px' },
        margin: '0px',
        paddingLeft: { sm: '0px' },
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Main
