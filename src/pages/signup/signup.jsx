import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../services/signupService'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import getProfessions from '../../services/professionService'
import './signup.css'
import Typography from '@mui/material/Typography'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  Container,
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
  const [profs, setProfs] = useState([])
  const [profession, setProfession] = useState('')
  //const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    getProfessionsData()
  }, [])

  const getProfessionsData = async () => {
    const professions = await getProfessions()
    setProfs(professions)
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }
  const handleProfessionChange = (event) => {
    setProfession(event.target.value)
  }

  const onSignup = async () => {
    const form = {
      name,
      lastname,
      email,
      password,
      idNumber,
      phone,
      adress,
      role,
      profession,
    }
    const result = await signup(form)
    if (result === 200) {
      console.log(result)
      navigate('/profile')
    } else {
      console.log(result)
    }
  }
  if (Object.keys(profs).length !== 0) {
    return (
      <Container
        id="container"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: '50px',
          margin: 0,
          height: '100vh',
          width: '100%',
          minWidth: '390px',
          // overflow: 'auto',
          minHeight: '100%',
          paddingTop: '2%',
          paddingBottom: '2%',
         minHeight: '950px'
        }}
        maxWidth={false}
      >
        <Card
          sx={{
            width: '50%',
            height: {
              xs: '500px',
              sm: '500px',
              md: '500px',
              lg: '500px',
              xl: '500px',
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
            Join us and be part of the change! With your help, we can continue
            to bring medicine, vaccines, medical attention, and clean water to
            the children who need it most. Together, we can build a world where
            all children have equal opportunities and can reach their full
            potential. If you care about the well-being of children and want to
            contribute to making the world a better place, join our community of
            partners and help us change lives. Every little bit counts, and
            together we can make a big difference. Thank you for your support!
          </Typography>
        </Card>
        <Card
          sx={{
            maxWidth: '500px',
            // margin: '80px 15px',
            height: '825px',
          }}
        >
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
                <InputLabel id="demo-simple-select-label">
                  Profession
                </InputLabel>
                <Select
                  labelId="professione-label"
                  id="profession"
                  value={profession}
                  label="Profession"
                  onChange={handleProfessionChange}
                >
                  {profs.map((elem) => {
                    return (
                      <MenuItem value={elem.name} key={elem.id}>
                        {elem.name}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
          </CardContent>
          <Divider />
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Button onClick={onSignup} color="success" variant='contained'>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Container>
    )
  } else {
    return <Loading />
  }
}

export default SignupCard
