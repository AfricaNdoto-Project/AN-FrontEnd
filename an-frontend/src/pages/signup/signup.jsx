import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Signup } from '../../services/signupService'

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
  // const [errorMessage, setErrorMessage] = useState('')

  const onSignup = async () => {
    const form = { name, lastname, email, password, idNumber, phone, address, role }
    const result = await Signup(form)
    if (result === 200) {
      navigate('/profile')
    } else {
      console.log(result)
    }
  }

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
        <TextField
          onChange={(e) => setRole(e.target.value)}
          label="Role"
          variant="outlined"
          fullWidth={true}
        />
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
  )
}

export default SignupCard
