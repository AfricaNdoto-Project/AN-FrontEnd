import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

const Project = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [target, setTarget] = useState('')
    const [description, setDescription] = useState('')
    const [objective, setObjective] = useState('')
    const [budget, setBudget] = useState('')
    const [deadline, setDeadline] = useState('')
    const [status, setStatus] = useState('')
    const [volunteer, setVolunteer] = useState('')
    const [profession, setProfession] = useState('')
    const [equipmentName, setEquipmentName] = useState('')
    const [equipmentDescription, setEquipmentDescription] = useState('')
    const [equipmentCost, setEquipmentCost] = useState('')

    const [errorMessage, setErrorMessage] = useState('')
  
    const onLogin = async () => {
      const form = { name, target, description, objective, budget, deadline, status, volunteer, profession, equipmentName, equipmentDescription, equipmentCost}
      const result = await login(form)
      if (result === 200) {
        navigate('/project')
      } else {
        console.log(result)
      }
    }
  
    return (
      <Card sx={{ maxWidth: '500px' }}>
        <CardHeader title="Project" />
        <CardContent>
          <TextField
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="outlined"
            fullWidth={true}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            onChange={(e) => setTarget(e.target.value)}
            label="Target"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setObjective(e.target.value)}
            label="Objective"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setBudget(e.target.value)}
            label="Budget"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setDeadline(e.target.value)}
            label="Date"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setProfession(e.target.value)}
            label="Profession"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setVolunteer(e.target.value)}
            label="Volunteer"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setEquipmentName(e.target.value)}
            label="Equipment name"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setEquipmentDescription(e.target.value)}
            label="Equipment description"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            onChange={(e) => setEquipmentCost(e.target.value)}
            label="Equipment cost"
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

export default Project
