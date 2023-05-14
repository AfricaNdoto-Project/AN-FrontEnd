import { useState, useEffect } from 'react'
import './home.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../../services/projectsService'
import frontPage from '../../assets/Portada.png'
import events from '../../assets/events.jpg'
import project from '../../assets/projects.jpg'
import calendar from '../../assets/apadrina1.jpg'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Loading from '../../components/loading/loading'

const Home = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const getProjects = async () => {
      const result = await getAllProjects()
      setProjects(result)
    }
    getProjects()
  }, [])
  function CarouselProjects(props) {
    useEffect(() => {}, [])
    return (
      <Carousel>
        {projects.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    )
  }

  function Item(props) {
    return (
      <Paper sx={{ backgroundColor: '#AED5F5' }}>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <Button className="CheckButton">See More</Button>
      </Paper>
    )
  }
  return (
    <Container
      sx={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        minHeight: '100vh',
        padding: {
          xs: '0px',
          sm: '0px',
          md: '0px',
          lg: '0px',
        },
      }}
      maxWidth={false}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '100%',
          margin: '0px',
          paddingLeft: '0px',
          paddingRight: '0px',
        }}
      >
        {CarouselProjects()}
      </Container>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
        events
      >
        <CardMedia
          component="img"
          image={frontPage}
          events
          alt="Front-Page"
          sx={{
            // height: '100%',
            //  width: '100%'
            height: 'auto',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </Container>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          marginTop: '5px',
          marginBottom: '25px',
        }}
      >
        <Typography
          sx={{
            margin: '10px',
            fontSize: {
              xl: '40px',
              lg: '36px',
              md: '28px',
              sm: '16px',
              xs: '10px',
            },
          }}
        >
          With your donation a month for a year, we can provide complete
          treatment against malnutrition to 7 children.
        </Typography>
        <Link to="/donation">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ height: '80px', width: '250px', fontSize: '36px' }}
          >
            Donation
          </Button>
        </Link>
      </Container>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: '10px',
        }}
      >
        <Link
          to="/allprojects"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '250px',
            }}
          >
            <CardMedia
              component="img"
              height="250px"
              image={project}
              alt="Projects"
              sx={{
                width: '250px',
                borderRadius: '10px',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            />
            <Typography variant="h4">Projects</Typography>
          </Box>
        </Link>
        <Link
          to="/events"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '250px',
              marginRight: '10px'
            }}
          >
            <CardMedia
              component="img"
              height="250px"
              image={events}
              alt="Projects"
              sx={{
                width: '250px',
                borderRadius: '10px',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            />
            <Typography variant="h4">Events</Typography>
          </Box>
        </Link>
        <Link
          to="/calendar"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '300px',
            }}
          >
            <CardMedia
              component="img"
              height="200px"
              image={calendar}
              alt="Projects"
              sx={{
                width: '235px',
                borderRadius: '10px',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            />
            <Typography variant="h4">Calendar</Typography>
          </Box>
        </Link>
      </Container>
    </Container>
  )
}

export default Home
