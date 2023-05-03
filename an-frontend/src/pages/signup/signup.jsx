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

const SignupCard = () => {

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
  const [profession, setProfession] = useState({})
  //const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    getProfessionsData()
  },[])

  const getProfessionsData = async () => {
    const professions = await getProfessions()
    setProfession(professions)
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }

  const onSignup = async () => {
    const form = { name, lastname, email, password, idNumber, phone, address, role, profession }
    const result = await signup(form)
    if (result === 200) {
        console.log(result)
      navigate('/profile')
    } else {
      // console.log(result)
    }
  }
  console.log(profession)
  if(Object.keys(profession).length !== 0) {
  console.log(profession)
  
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Signup" />
      <CardContent>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          fullWidth={true}
        />
        <TextField
          onChange={(e) => setLastname(e.target.value)}
          label="Lastname"
          variant="outlined"
          fullWidth={true}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth={true}
        />
        <TextField
          onChange={(e) => setIdNumber(e.target.value)}
          label="idNumber"
          variant="outlined"
          fullWidth={true}
        />
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          label="Phone"
          variant="outlined"
          fullWidth={true}
        />
        <TextField
          onChange={(e) => setAddress(e.target.value)}
          label="Address"
          variant="outlined"
          fullWidth={true}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={ role }
              label="Role"
              onChange={ handleRoleChange }
            >
              <MenuItem value={'donor'}>Donor</MenuItem>
              <MenuItem value={'volunteer'}>Volunteer</MenuItem>
              <MenuItem value={'volunteer_donor'}>Volunteer and Donor</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* <TextField
          onChange={(e) => setRole(e.target.value)}
          label="Role"
          variant="outlined"
          fullWidth={true}
        /> */}
         <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Profession</InputLabel>
            <Select
              labelId="professione-label"
              id="profession"
              value={ role }
              label="Profession"
              // onChange={ handleRoleChange }
            >
              {profession.map((prof) => {
                return <MenuItem value={prof.name}>{prof.name}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Box>
        {/* <TextField
          onChange={(e) => setProfession(e.target.value)}
          label="profession"
          variant="outlined"
          fullWidth={true}
        /> */}
        {/* {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )} */}
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onSignup} color="success">
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

export default SignupCard
