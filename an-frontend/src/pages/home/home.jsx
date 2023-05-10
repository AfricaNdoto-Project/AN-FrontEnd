import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ButtonBases from '../../components/donationButton/donationButton'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../../services/projectsService'


const Home = () => {
  function Example(props) {
    var items = [
      {
        name: 'Random Name #1',
        description: 'Probably the most random thing you have ever seen!',
      },
      {
        name: 'Random Name #2',
        description: 'Hello World!',
      },
    ]
  useEffect(() => {

  }, [])


    return (
      <Carousel>
        {items.map((item, i) => (
          <Item
            sx={{
              height: '100%',
            }}
            key={i}
            item={item}
          />
        ))}
      </Carousel>
    )
  }

  function Item(props) {
    return (
      <Paper>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
      </Paper>
    )
  }
  return (
    <div className="container">
      <div>{Example()}</div>
      <div className="wrapper">
        <Link to="/donation">
          <a className="myButton">Donation</a>
        </Link>
      </div>
      <div className='wrapper'>Section 2</div>
    </div>
  )
}

export default Home
