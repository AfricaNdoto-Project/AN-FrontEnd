import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/loginService'
import { Box, Typography } from '@mui/material'
import { Email, Lock, VisibilityOff, Visibility } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  Container,
  IconButton,
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
        // overflow: 'auto',
        paddingTop: '2%',
      }}
      maxWidth={false}
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
          marginTop: '12px',
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
        </CardContent>
        <Divider />
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '5px 0',
          }}
        >
          <Button
            variant="contained"
            onClick={onLogin}
            color="success"
            sx={{ marginRigth: '5px' }}
          >
            Login
          </Button>
          <Link to="/signup">
            <Button
              variant="outlined"
              color="success"
              sx={{ marginLeft: '5px' }}
            >
              Register
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  )
}

export default LoginCard
