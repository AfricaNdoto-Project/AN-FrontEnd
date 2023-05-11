import { Container, Typography, Grid } from '@mui/material'

const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: '#1976d2',
        width: '100vw',
        margin: '0px',
        minWidth: '392px',
        padding: '20px 0',
        color: '#fff'
      }}
      maxWidth={false}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ margin: '0' }}>AFRICANDOTO</Typography>
          <Typography>442 Usa River, Arusha, Tanzania</Typography>
          <Typography>(M): +34 (646) 793-638</Typography>
          <Typography>(E): info@africandoto.org</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ margin: '0' }}>INFO</Typography>
          <Typography>About Us</Typography>
          <Typography>Contact</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h6" sx={{ margin: '0' }}>© 2023 AFRICANDOTO</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
