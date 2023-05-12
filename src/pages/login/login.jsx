import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/loginService'
import { Email, Lock, VisibilityOff, Visibility } from '@mui/icons-material'





import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  Container,
  IconButton
  // Typography
} from '@mui/material'
import './login.css'

const LoginCard = () => {
  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [errorMessage, setErrorMessage] = useState('')


  const [isPassVisible, setIsPassVisible] = useState(false)
  const changeVisibility = () => {
    setIsPassVisible(!isPassVisible)
  }


  const onLogin = async () => {
    const form = { email, password }
    const result = await login(form)


    if (result === 200) {
      navigate('/profile')
    } else {
      alert(result)
      console.log(result)
    }
  }
    return (
      <Container
        id="login-container"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '100vh',
          width: '100vw',
          margin: '0px',
          minWidth: '390px',
          overflow: 'scroll',
        }}
        maxWidth={false}
      >
        <Card
          sx={{
            maxWidth: '500px',
            marginTop: '15px',
            height: '300px',
          }}
        >
          <CardHeader title="Login" />
          <CardContent>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
              fullWidth={true}
              InputProps={{
                endAdornment: <Email />,
              }}
              // sx={{ marginBottom: '20px' }}
              sx={{ margin: '10px 0' }}
              InputLabelProps={{ required: true }}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              variant="outlined"
              fullWidth={true}
              sx={{ margin: '10px 0' }}
              type={isPassVisible ? 'text' : 'password'}
              InputProps={{
                required: true,
                startAdornment: <Lock />,
                endAdornment: (
                  <IconButton onClick={changeVisibility}>
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
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
              flexDirection: 'column',
              justifyContent: 'center',
              margin: '5px 0',
            }}
          >
            <Button onClick={onLogin} color="success">
              Login
            </Button>
          </CardActions>
        </Card>
      </Container>
    )
}


export default LoginCard
