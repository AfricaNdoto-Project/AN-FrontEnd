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
        width: '100vw',
        height: '100vh',
        minWidth: '390px',
        overflow: 'scroll',
      }}
    >
      <Card
        sx={{
          maxWidth: '500px',
          height: '425px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '30px',
        }}
      >
        <CardHeader title="Donation" />
        <CardContent>
          <TextField
            sx={{ minWidth: 120, margin: '10px', width: '200px' }}
            onChange={(e) => setAmount(e.target.value)}
            label="Amount"
            variant="outlined"
            fullWidth={true}
          />
          <Box sx={{ minWidth: 120, margin: '10px' }}>
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
          <Box sx={{ minWidth: 120, margin: '10px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="type-label"
                id="type"
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
          <Box sx={{ minWidth: 120, margin: '10px' }}>
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
          {/* {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )} */}
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