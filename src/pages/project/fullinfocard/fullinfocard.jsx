import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
} from '@mui/material'
import { Link } from 'react-router-dom'

import './fullinfocard.css'

export default function FullInfoCard({ project }) {
  return (
    <Card
      sx={{
        alignItems: 'center',
        width: '100%',
        margin: '20px',
        borderRadius: '10px',
      }}
    >
      <CardHeader
        sx={{ margin: 0, backgroundColor: '#E4C5A8' }}
        title={
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              fontWeight: 'bold',
              margin: 2,
            }}
            variant="h5"
            color="text.secondary"
          >
            {project.name}
          </Typography>
        }
        subheader={
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              fontWeight: 'bold',
              margin: 0,
            }}
            variant="body2"
            color="text.secondary"
          >
            {project.target}
          </Typography>
        }
      />
      <CardContent>
        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            fontWeight: 'bold',
            fontSize: 15.7,
            padding: 1.5,
          }}
          variant="body2"
          color="text.secondary"
        >
          Description: {project.description}
        </Typography>
        <Divider sx={{ margin: '10px' }}></Divider>
        <Box
          sx={{
            margin: '8px',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: '100%',
              margin: '8px',
            }}
          >
            <Typography
              className="projectContent"
              sx={{ display: 'flex', flexDirection: 'row', fontSize: 17 }}
              variant="body2"
              color="text.secondary"
            >
              Objective: {project.objective}
            </Typography>
            <Typography
              className="projectContent"
              sx={{ display: 'flex', flexDirection: 'row', fontSize: 17 }}
              variant="body2"
              color="text.secondary"
            >
              Budget: {project.budget} €
            </Typography>
            <Typography
              className="projectContent"
              sx={{ display: 'flex', flexDirection: 'row', fontSize: 17 }}
              variant="body2"
              color="text.secondary"
            >
              Collect: {project.collect} €
            </Typography>
            <Typography
              className="projectContent"
              sx={{ display: 'flex', flexDirection: 'row', fontSize: 17 }}
              variant="body2"
              color="text.secondary"
            >
              Staff: {project.professionals[0].name}
            </Typography>
            <Typography
              className="projectContent"
              sx={{ display: 'flex', flexDirection: 'row', fontSize: 17 }}
              variant="body2"
              color="text.secondary"
            >
              Equipment: {project.equipment[0].name}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ margin: '10px' }}></Divider>
        <Link to="/allprojects">
          <Button
            variant="outlined"
            size="large"
            color="primary"
            sx={{ margin: '8px' }}
          >
            See other
          </Button>
        </Link>
        <Link to="/donation">
          <Button variant="contained" size="large" color="secondary">
            donation
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
