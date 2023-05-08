import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import getAllProjects from '../../services/allProjectsService'
import getProducts from '../../services/getProducts'
import { makeDonation } from '../../services/makeDonation'
import Loading from '../../components/loading/loading'


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
    <Card sx={{ maxWidth: '500px', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <CardHeader title="Donation" />
      <CardContent>
        <TextField
        sx={{minWidth: 120, margin: '10px'}}
          onChange={(e) => setAmount(e.target.value)}
          label="Amount"
          variant="outlined"
          fullWidth={true}
        />
        <Box sx={{ minWidth: 120, margin: '10px'  }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Projects</InputLabel>
            <Select
              labelId="project-label"
              id="project"
              value={ projectName }
              label="Project"
              onChange={ handleProjectNameChange }
            >
              {projects.map((elem, idx) => {
                return <MenuItem value={ elem.name } key={idx}>{ elem.name }</MenuItem>
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
        <Box sx={{ minWidth: 120, margin: '10px' }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
              labelId="professione-label"
              id="profession"
              value={ name }
              label="Profession"
              onChange={ handleProductChange }
            >
              {products.map((elem, idx) => {
                return <MenuItem value={ elem.name } key={idx}>{ elem.name }</MenuItem>
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
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={ submit } color="success">
          Submit
        </Button>
      </CardActions>
    </Card>
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