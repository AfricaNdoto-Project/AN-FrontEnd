import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Main
