// import * as React from 'react';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import getProfessions from '../../services/professionService'
import getVolunteers from '../../services/volunteerService';

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
import Loading from '../../components/loading/loading'

const NewProject = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [target, setTarget] = useState('')
    const [description, setDescription] = useState('')
    const [objective, setObjective] = useState('')
    const [budget, setBudget] = useState('')
    const [deadline, setDeadline] = useState('')
    const [status, setStatus] = useState('')
    const [volunteer, setVolunteer] = useState('')
    const [volunteerData, setVolunteerData] = useState([])
    const [profession, setProfession] = useState('')
    // const [professionId, setProfessionId] = useState(0)
    const [professionData, setProfessionData] = useState([])
    const [equipmentName, setEquipmentName] = useState('')
    const [equipmentDescription, setEquipmentDescription] = useState('')
    const [equipmentCost, setEquipmentCost] = useState('')

    // const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        getProfessionData()
    }, [])


    const getProfessionData = async () => {
        const result = await getProfessions()
        const result2 = await getVolunteers()
        setProfessionData(result) 
        setVolunteerData(result2)
    }

    const onSubmit = async () => {
      const form = { name, target, description, objective, budget, deadline, status, volunteer, profession, equipmentName, equipmentDescription, equipmentCost}
      //Aqui hay que añadir el servicio para postear el pryecto
      const result = await NewProject(form)
      if (result === 200) {
        navigate('/newproject')
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

      const handleVolunteerChange = (event) => {
        setVolunteer(event.target.value);
      };

    if(Object.keys(professionData).length!==0 && Object.keys(volunteerData).length!==0) {
        console.log(volunteer)
        console.log(volunteerData.filter(elem => elem.role==='volunteer' && elem.volunteer.professional.name===profession))
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
                <FormControlLabel defaultChecked="true" value="draft" control={<Radio />} label="Draft" />
                <FormControlLabel value="accepted" control={<Radio />} label="Accepted" />
                <FormControlLabel value="denied" control={<Radio />} label="Denied" />
            </RadioGroup>
        </FormControl>
          <p>Select a profession</p>
        <FormControl required fullWidth>
            <InputLabel id="profession-selector">Profession</InputLabel>
                <Select
                labelId="profession-selector"
                id="profession-selector"
                placeholder='Select a profession'
                value={profession}
                label="Profession"
                onChange={handleProfessionChange}
                >
                    {professionData.map((elem) => {
                        return <MenuItem value={elem.name} key={elem.id}>{elem.name}</MenuItem>
                    })}
                </Select>
        </FormControl>

        <FormControl fullWidth>
            <InputLabel id="volunteer-selector">Volunteer</InputLabel>
                <Select
                labelId="volunteer-selector"
                id="volunteer-selector"
                value={volunteer}
                label="Volunteer"
                onChange={handleVolunteerChange}
                >
            
                    { volunteerData.filter(elem => elem.role==='volunteer' && elem.volunteer.professional.name===profession).map((elem) =>{
                      return <MenuItem value={elem.name} key={elem.id}>{elem.name} {elem.lastname}</MenuItem>
                    })

                    }
                </Select>
        </FormControl>

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
              <Loading />
          ) 
    }
}

export default NewProject
