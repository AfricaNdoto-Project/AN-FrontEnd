import * as React from 'react';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import getProfessions from '../../services/professionService'

import {
    Card,
    CardHeader,
    TextField,
    CardContent,
    Divider,
    Button,
    CardActions,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Box,
    Select,
    InputLabel,
    MenuItem,
    CircularProgress
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
    const [professionData, setProfessionData] = useState({})
    const [equipmentName, setEquipmentName] = useState('')
    const [equipmentDescription, setEquipmentDescription] = useState('')
    const [equipmentCost, setEquipmentCost] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        getProfessionData()
    }, [])

    const getProfessionData = async () => {
        const result = await getProfessions()
        setProfessionData(result)
    }

    const onSubmit = async () => {
      const form = { name, target, description, objective, budget, deadline, status, volunteer, profession, equipmentName, equipmentDescription, equipmentCost}
      const result = await Project(form)
      if (result === 200) {
        navigate('/project')
      } else {
        console.log(result)
      }
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
      };

    const handleProfessionChange = (event) => {
        setProfession(event.target.value);
      };

    if(Object.keys(professionData).length!==0) {
        // console.log(status)
    return (
      <Card sx={{ maxWidth: '500px' }}>
        <CardHeader title="Project" />
        <CardContent>
          <TextField
            required
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
            required
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            required
            onChange={(e) => setObjective(e.target.value)}
            label="Objective"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            required
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
          {/* <TextField
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
            variant="outlined"
            fullWidth={true}
          /> */}
           <FormControl>
        <FormLabel id="status-selector" >Status</FormLabel>
            <RadioGroup
                row
                aria-labelledby="status-selector"
                defaultValue="draft"
                name="status"
                value={status}
                onChange={handleStatusChange}
            >
                <FormControlLabel value="draft" control={<Radio />} label="Draft" />
                <FormControlLabel value="accepted" control={<Radio />} label="Accepted" />
                <FormControlLabel value="denied" control={<Radio />} label="Denied" />
            </RadioGroup>
        </FormControl>
          {/* <TextField
            required
            onChange={(e) => setProfession(e.target.value)}
            label="Profession"
            variant="outlined"
            fullWidth={true}
          /> */}

          <FormControl fullWidth>
        <InputLabel id="profession-selector">Profession</InputLabel>
            <Select
            labelId="profession-selector"
            id="profession-selector"
            value={profession}
            label="Profession"
            onChange={handleProfessionChange}
            >
            {professionData.map((elem) => {
                return <MenuItem value={elem.name} key={elem.id}>{elem.name}</MenuItem>
            })}
            
            </Select>
        </FormControl>

          <TextField
            required
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
          <Button onClick={onSubmit} color="primary">
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

export default Project
