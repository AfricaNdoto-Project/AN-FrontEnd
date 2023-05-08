import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../services/signupService'
import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import getProfessions from '../../services/professionService'
import './signup.css'



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
import Loading from '../../components/loading/loading'

const SignupCard = () => {

  // console.log(import.meta.env.VITE_TEST)
  const navigate = useNavigate()
  
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [phone, setPhone] = useState('')
  const [adress, setAddress] = useState('')
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

  const onSignup = async () => {
    const form = { name, lastname, email, password, idNumber, phone, adress, role, profession }
    const result = await signup(form)
    if (result === 200) {
        console.log(result)
      navigate('/profile')
    } else {
      console.log(result)
    }
  }
  if(Object.keys(professions).length !== 0) {

  return (
    <div className="container">
      <figure>
        <img src="" />
      </figure>
      <Card sx={{ maxWidth: '500px', margin: 0 }}>
        <CardHeader title="Signup" />
        <CardContent>
          <TextField
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="outlined"
            fullWidth={true}
            sx={{ margin: '10px 0' }}
          />
          <TextField
            onChange={(e) => setLastname(e.target.value)}
            label="Lastname"
            variant="outlined"
            fullWidth={true}
            sx={{ margin: '10px 0' }}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
            fullWidth={true}
            // sx={{ marginBottom: '20px' }}
            sx={{ margin: '10px 0' }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            fullWidth={true}
            sx={{ margin: '10px 0' }}
          />
          <TextField
            onChange={(e) => setIdNumber(e.target.value)}
            label="idNumber"
            variant="outlined"
            fullWidth={true}
            sx={{ margin: '10px 0' }}
          />
          <TextField
            onChange={(e) => setPhone(e.target.value)}
            label="Phone"
            variant="outlined"
            fullWidth={true}
            sx={{ margin: '10px 0' }}
          />
          <TextField
            onChange={(e) => setAddress(e.target.value)}
            label="Address"
            variant="outlined"
            fullWidth={true}
            sx={{ margin: '10px 0' }}
          />
          <Box sx={{ minWidth: 120, margin: '10px 0' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                value={role}
                label="Role"
                onChange={handleRoleChange}
              >
                <MenuItem value={'donor'}>Donor</MenuItem>
                <MenuItem value={'volunteer'}>Volunteer</MenuItem>
                <MenuItem value={'volunteer_donor'}>
                  Volunteer and Donor
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, margin: '10px 0' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Profession</InputLabel>
              <Select
                labelId="professione-label"
                id="profession"
                value={profession}
                label="Profession"
                onChange={handleProfessionChange}
              >
                {professions.map((elem) => {
                  return (
                    <MenuItem value={elem.name} key={elem.id}>
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
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={onSignup} color="success">
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  )}
  else {
    return (
        <Loading />
    )
  }
}

export default SignupCard
