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
            }}
            variant="body1"
            color="text.secondary"
          >
            <h2
              style={{
                margin: 10,
              }}
            >
              {project.name}
            </h2>
          </Typography>
        }
        subheader={
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
            variant="body2"
            color="text.secondary"
          >
            <h4
              style={{
                margin: 0,
              }}
            >
              {project.target}
            </h4>
          </Typography>
        }
      />
      <CardContent>
        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
          variant="body2"
          color="text.secondary"
        >
          <h3>Description: {project.description}</h3>
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
              sx={{ display: 'flex', flexDirection: 'row' }}
              variant="body2"
              color="text.secondary"
            >
              <p className="projectContent">Objective: {project.objective}</p>
            </Typography>
            <Typography
              sx={{ display: 'flex', flexDirection: 'row' }}
              variant="body2"
              color="text.secondary"
            >
              <p className="projectContent">Budget: {project.budget}</p>
            </Typography>
            <Typography
              sx={{ display: 'flex', flexDirection: 'row' }}
              variant="body2"
              color="text.secondary"
            >
              <p className="projectContent">Collect: {project.collect}</p>
            </Typography>
            <Typography
              sx={{ display: 'flex', flexDirection: 'row' }}
              variant="body2"
              color="text.secondary"
            >
              <p className="projectContent">
                Staff: {project.professionals[0].name}
              </p>
            </Typography>
            <Typography
              sx={{ display: 'flex', flexDirection: 'row' }}
              variant="body2"
              color="text.secondary"
            >
              <p className="projectContent">
                Equipment: {project.equipment[0].name}
              </p>
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
