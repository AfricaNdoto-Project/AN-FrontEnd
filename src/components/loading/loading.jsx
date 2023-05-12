import { Box } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';


const Loading = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Loading...</h1>
      <CircularProgress />
    </Box>
  )
}

export default Loading