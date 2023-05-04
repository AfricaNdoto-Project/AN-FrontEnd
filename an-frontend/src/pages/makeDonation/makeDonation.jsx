import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../services/signupService'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import getProfessions from '../../services/professionService';

import CircularProgress from '@mui/material/CircularProgress';


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
  
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [role, setRole] = useState('')
  const [professions, setProfessions] = useState([])
  const [profession, setProfession] = useState('')
  //const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    getProfessionsData()
  },[])

  const getProfessionsData = async () => {
    const professions = await getProfessions()
    setProfessions(professions)
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }
  const handleProfessionChange = (event) => {
    setProfession(event.target.value)
  }

  const submit = async () => {
    const form = { name, lastname, email, password, idNumber, phone, address, role, profession }
    const result = await signup(form)
    if (result === 200) {
        console.log(result)
      navigate('/profile')
    } else {
      // console.log(result)
    }
  }
  if(Object.keys(professions).length !== 0) {
  // console.log(profession)
  // profession.map(elem => console.log(elem.name))
    // console.log(role)
    // console.log(prof)

  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Donation" />
      <CardContent>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Amount"
          variant="outlined"
          fullWidth={true}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Projects</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={ role }
              label="Role"
              onChange={ handleRoleChange }
            >
              <MenuItem value={'punctual'}>Punctual</MenuItem>
              <MenuItem value={'monthly'}>Monthly</MenuItem>
              <MenuItem value={'anual'}>Anual</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={ role }
              label="Role"
              onChange={ handleRoleChange }
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
              value={ profession }
              label="Profession"
              onChange={ handleProfessionChange }
            >
              {professions.map((elem) => {
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