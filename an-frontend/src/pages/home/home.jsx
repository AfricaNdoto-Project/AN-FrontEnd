import React from 'react'
import './home.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ButtonBases from '../../components/donationButton/donationButton'
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
      <div>
        {Example()}
      </div>
      <div className='button-donation'>
        <ButtonBases/>
      </div>
    </div>
  )
}

export default Home
