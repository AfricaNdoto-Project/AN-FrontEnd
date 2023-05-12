import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { getAllProjects } from '../../services/projectsService'
import getProducts from '../../services/productService'
import { makeDonation } from '../../services/donationsService'
import Loading from '../../components/loading/loading'
import './makeDonation.css'
import { Typography } from '@mui/material'


import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  Container
  // Typography
} from '@mui/material'

const Donation = () => {
  const navigate = useNavigate()

  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('')
  const [projects, setProjects] = useState([])
  const [products, setProducts] = useState([])
  const [projectName, setProjectName] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    getData()
  },[])

  const getData = async () => {
    const result = await getProducts()
    const result2 = await getAllProjects()
    setProducts(result)
    setProjects(result2)
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }
  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value)
  }
  const handleProductChange = (event) => {
    setName(event.target.value)
  }

  const submit = async () => {
    const form = { amount,type , projectName, name }
    const result = await makeDonation(form)
    if (result === 200) {
        console.log(result)
      navigate('/')
    } else {
      navigate('/')
    }
  }
  if(products.length !== 0 && projects.length !== 0) {
  return (
    <Container
      id="container"
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        width: '100vw',
        margin: '0px',
        minWidth: '390px',
        // overflow: 'auto',
        paddingTop: '2%',
      }}
    >
      <Card
        sx={{
          width: '50%',
          height: {
            xs: '350px',
            sm: '350px',
            md: '350px',
            lg: '350px',
            xl: '350px',
          },
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: '2%',
          opacity: '60%',
          borderRadius: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '8px',
              sm: '12px',
              md: '20px',
              lg: '24px',
              xl: '26px',
            },
            color: 'black',
            textAlign: 'justify',
            padding: '3%',
          }}
        >
          With your help, we bring medicine, vaccines, medical attention, and
          clean water to the children who need it most. Today, many of us
          believe in a world where all children have equal opportunities, but we
          need many more, and your help is essential to achieve this goal.
        </Typography>
      </Card>
      <Card
        sx={{
          maxWidth: '500px',
          width: '400px',
          height: '425px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
          opacity: '70%',
        }}
      >
        <CardHeader title="Donation" />
        <CardContent sx={{ color: 'black' }}>
          <TextField
            sx={{ minWidth: 120, margin: '10px', width: '300px' }}
            onChange={(e) => setAmount(e.target.value)}
            label="Amount"
            variant="outlined"
            fullWidth={true}
          />
          <Box sx={{ minWidth: 120, margin: '10px', width: '300px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Projects</InputLabel>
              <Select
                labelId="project-label"
                id="project"
                value={projectName}
                label="Project"
                onChange={handleProjectNameChange}
              >
                {projects.map((elem, idx) => {
                  return (
                    <MenuItem value={elem.name} key={idx}>
                      {elem.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, margin: '10px', width: '300px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="type-label"
                // display: 'flex',
                // flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'flex-start',
                // width: '100vw',
                // height: '100%',
                // minWidth: '390px',
                // // overflow: 'scroll', id="type"
                value={type}
                label="Type"
                onChange={handleTypeChange}
              >
                <MenuItem value={'punctual'}>Punctual</MenuItem>
                <MenuItem value={'monthly'}>Monthly</MenuItem>
                <MenuItem value={'anual'}>Anual</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, margin: '10px', width: '300px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Product</InputLabel>
              <Select
                labelId="professione-label"
                id="profession"
                value={name}
                label="Profession"
                onChange={handleProductChange}
              >
                {products.map((elem, idx) => {
                  return (
                    <MenuItem value={elem.name} key={idx}>
                      {elem.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Box>
        </CardContent>
        <Divider />
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 0,
          }}
        >
          <Button onClick={submit} color="success">
            Submit
          </Button>
        </CardActions>
      </Card>
    </Container>
  )}
  else {
    return (
      <>
        <Loading />
      </>
    )
  }
}

export default Donation