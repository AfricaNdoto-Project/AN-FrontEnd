
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

import FullInforCard from "./fullinfocard/fullinfocard";
import { Container } from "@mui/material";

const Project = () => {
  const location = useLocation()
  const data = location.state?.data

  const displayProject = () => {
    return (
      <>
      <Container
      sx={{ 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: '50px',
            margin: 0,
            height: '100%',
            width: '100vw',
          }}
          maxWidth={false}
      >
        <FullInforCard project={ data }/>
      </Container>
      </>
    )
  } 

  if(!data) {
   return (
    <>
    <Navigate to='/allprojects' replace={ true }/>
    </>
   ) 
  } else {
   return (
   <div>
      { displayProject() }
    </div>
   )
  }
}

export default Project
