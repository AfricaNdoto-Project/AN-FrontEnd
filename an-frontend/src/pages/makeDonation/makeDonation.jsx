import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../services/signupService'
import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import getAllProjects from '../../services/allProjectsService'
import getProducts from '../../services/getproducts'

import CircularProgress from '@mui/material/CircularProgress'


import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  // Typography
} from '@mui/material'

const Donation = () => {

  console.log(import.meta.env.VITE_TEST)
  const navigate = useNavigate()
  
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('')
  const [projectName, setProjectName] = useState([])
  const [product, setProduct] = useState([])
  const [proj, setProj] = useState('')
  const [prod, setProd] = useState('')

  //const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    getData()
  },[])

  const getData = async () => {
    const result = await getProducts()
    const result2 = await getAllProjects()
    setProduct(result)
    setProjectName(result2)
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }
  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value)
  }
  const handleProductChange = (event) => {
    setProduct(event.target.value)
  }

  const submit = async () => {
    const form = { amount, projectName, type, product }
    const result = await signup(form)
    if (result === 200) {
        console.log(result)
      navigate('/profile')
    } else {
      // console.log(result)
    }
  }
  if(product.length !== 0 && projectName.length !== 0) {

  console.log(type)
  console.log(projectName)
  console.log(product)
  // profession.map(elem => console.log(elem.name))
  // console.log(role)
  // console.log(prof)

  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Donation" />
      <CardContent>
        <TextField
          onChange={(e) => setAmount(e.target.value)}
          label="Amount"
          variant="outlined"
          fullWidth={true}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Projects</InputLabel>
            <Select
              labelId="project-label"
              id="project"
              value={ projectName }
              label="Project"
              onChange={ handleProjectNameChange }
            >
              {projectName.map((elem) => {
                return <MenuItem value={ elem.name }>{ elem.name }</MenuItem>
              })}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              value={ type }
              label="Type"
              onChange={ handleTypeChange }
            >
              <MenuItem value={'punctual'}>Punctual</MenuItem>
              <MenuItem value={'monthly'}>Monthly</MenuItem>
              <MenuItem value={'anual'}>Anual</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
              labelId="professione-label"
              id="profession"
              value={ product }
              label="Profession"
              onChange={ handleProductChange }
            >
              {product.map((elem) => {
                return <MenuItem value={ elem.name }>{ elem.name }</MenuItem>
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
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={ submit } color="success">
          Submit
        </Button>
      </CardActions>
    </Card>
  )}
  else {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
        <CircularProgress />
      </Box>
    )
  }
}

export default Donation