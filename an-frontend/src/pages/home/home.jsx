import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../../services/projectsService'
import frontPage from '../../assets/Portada.png'
import CardMedia from '@mui/material/CardMedia'

const Home = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    const getProjects = async () => {
      const result = await getAllProjects()
      setProjects(result)
    }
    getProjects()
  }, [])
  console.log(projects)
  function Example(props) {
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
        paddingLeft: '0px', paddingRight: '0px'
      }}
      maxWidth={false}
    >
      <Container
      maxWidth={ false }
        sx={{ width: '100%',margin: '0px', paddingLeft: '0px', paddingRight: '0px' }}
      >
        {Example()}
      </Container>
      <Container
      maxWidth={false}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}
      >
        <CardMedia
          component="img"
          image={frontPage}
          alt="Front-Page"
          sx={{ height: '100%', width: '100%' }}
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
          marginBottom: '25px'
        }}
      >
        <Typography sx={{ margin: '10px' }}>
          With your donatvwion a month for a year, we can provide complete
          treatment against malnutrition to 7 children.
        </Typography>
        <Link to="/donation">
          <a className="myButton">Donation</a>
        </Link>
      </Container>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '10px',
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={frontPage}
          alt="Projects"
          sx={{
            width: '45%',
            margin: '5px',
            borderRadius: '100px',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.2s ease-in-out',
            },
          }}
        />
        <CardMedia
          component="img"
          height="140"
          image={frontPage}
          alt="Events"
          sx={{
            width: '45%',
            border: '4px solid black',
            margin: '5px',
            borderRadius: '100px',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.2s ease-in-out',
            },
          }}
        />
        <CardMedia
          component="img"
          height="140"
          image={frontPage}
          alt="Calendar"
          sx={{
            width: '45%',
            border: '4px solid black',
            margin: '5px',
            borderRadius: '100px',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.2s ease-in-out',
            },
          }}
        />
      </Container>
    </Container>
  )
}

export default Home
