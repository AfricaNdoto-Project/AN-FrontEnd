import { Outlet } from "react-router-dom"
import Header from "../components/header/header"

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <h1>Reboot Academy &copy; 2023</h1>
    </>
  )
}

export default Main