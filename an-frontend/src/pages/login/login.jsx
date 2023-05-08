import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/loginService'
import useIsAdmin from '../../hooks/useAdmin'
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

const LoginCard = () => {
  const navigate = useNavigate()
  const { adminData } = useIsAdmin()
  const { setIsAdmin } = adminData

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [errorMessage, setErrorMessage] = useState('')
  const onLogin = async () => {
    const form = { email, password }
    const result = await login(form)
    if (localStorage.getItem('role') === 'admin') {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }

    if (result === 200) {
      navigate('/profile')
    } else {
      console.log(result)
    }
  }

  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Login" />
      <CardContent>
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
        {/* {errorMessage && (
          <Typography color="error" textAlign="center" mt={2}>
            {errorMessage}
          </Typography>
        )} */}
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onLogin} color="success">
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginCard
