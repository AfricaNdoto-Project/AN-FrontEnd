import './footer.css'
import { Container, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: '#1976d2',
        width: '100vw',
        margin: '0px',
        minWidth: '392px'
      }}
      maxWidth={false}
    >
      <Typography sx={{ margin: '0'}} >AfricaNdoto &copy; 2023</Typography>
    </Container>
  )
}

export default Footer