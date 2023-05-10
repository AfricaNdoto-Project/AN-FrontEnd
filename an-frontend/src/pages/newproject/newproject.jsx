// import * as React from 'react';
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import getProfessions from '../../services/professionService'
import { getVolunteers } from '../../services/volunteerService'
import { CreateProject } from '../../services/projectsService'
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
    Select,
    InputLabel,
    MenuItem,
    Grid, 
    Container
    // Typography
  } from '@mui/material'
  import { styled } from '@mui/material/styles';

  import './newproject.css'

  import Loading from '../../components/loading/loading'

const NewProject = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [target, setTarget] = useState('') 
    const [description, setDescription] = useState('')
    const [objective, setObjective] = useState('')
    const [budget, setBudget] = useState('')
    const [deadline, setDeadline] = useState('')
    const [status, setStatus] = useState('draft')
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

    const location = useLocation()
    const data = location.state?.data

    const getProfessionData = async () => {
        const result = await getProfessions()
        const result2 = await getVolunteers()
        setProfessionData(result) 
        setVolunteerData(result2)
    }

    const onSubmit = async () => {
      const form = { name, target, description, objective, budget, deadline, status, volunteer, profession, equipmentName, equipmentDescription, equipmentCost}
  
      const result = await CreateProject(form)
      if (result === 200) {
        navigate('/newproject')
      }

    }
  

  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  }

  const handleProfessionChange = (event) => {
    setProfession(event.target.value)
  }

    const handleVolunteerChange = (event) => {
      setVolunteer(event.target.value);
      };

    const statusOption = () => {

      if (data.role === "admin") {
        return (
          <>
          <FormControlLabel defaultChecked="true" value="draft" control={<Radio/>} label="Draft" />
          <FormControlLabel value="accepted" control={<Radio />} label="Accepted" />
          <FormControlLabel value="denied" control={<Radio />} label="Denied" />
          </>
        )
      }
      if (data.role === "volunteer" || data.role === "volunteer_donor") {
        return (
         <>
          <FormControlLabel defaultChecked="true" value="draft" control={<Radio/>} label="Draft" />
          </>
        )
      }

    }


  if(Object.keys(professionData).length!==0 && Object.keys(volunteerData).length!==0) {  
  return (
      <Container
      id="project-container"
      sx={{ 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: '50px',
        margin: 0,
        height: '100%',
        width: '100vw',
      }}
      maxWidth={false}
      >
        <Grid 
        item xs={12} sm={12} md={8} lg={8} xl={4}
         >
          <Card 
          sx={{ 
            maxWidth: '500px', 
            margin: '80px 15px', 
            height: '86.5%'
            }}>
            <CardHeader title="Project" />
            <CardContent>
              <TextField
                required
                onChange={(e) => setName(e.target.value)}
                label="Name"
                variant="outlined"
                fullWidth={true}
                sx={{ marginBottom: '10px' }}
              />

              <TextField
                onChange={(e) => setTarget(e.target.value)}
                label="Target"
                variant="outlined"
                fullWidth={true}
                sx={{ marginBottom: '10px' }}
              />


              <TextField
                required
                onChange={(e) => setObjective(e.target.value)}
                label="Objective"
                variant="outlined"
                fullWidth={true}
                sx={{ marginBottom: '10px' }}
              />

              <TextField
                required
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                variant="outlined"
                fullWidth={true}
                maxRows={2}
                sx={{ marginBottom: '10px', overflow:'scroll'}}
                multiline
              />

              <TextField
                required
                onChange={(e) => setBudget(e.target.value)}
                label="Budget"
                variant="outlined"
                fullWidth={true}
                sx={{ marginBottom: '10px' }}
              />

              <TextField
                onChange={(e) => setDeadline(e.target.value)}
                label="Date"
                variant="outlined"
                fullWidth={true}
                sx={{ marginBottom: '10px' }}
              />
            
              <FormControl
              sx={{ marginBottom: '10px' }}
              >
            <FormLabel id="status-selector">Status</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="status-selector"
                    defaultValue="draft"
                    name="status"
                    value={status}
                    onChange={handleStatusChange}
                >
                    {statusOption()}

                </RadioGroup>
            </FormControl>

            <FormControl 
              required 
              fullWidth={true}
              sx={{ marginBottom: '10px' }}
            >
                
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

            <FormControl 
              fullWidth={true}
              sx={{ marginBottom: '10px' }}
            >
                <InputLabel id="volunteer-selector">Volunteer</InputLabel>
                    <Select
                    labelId="volunteer-selector"
                    id="volunteer-selector"
                    value={volunteer}
                    label="Volunteer"
                    onChange={handleVolunteerChange}
                    >
                
                        { volunteerData.filter(elem => (elem.role==='volunteer' || elem.role==='volunteer_donor') && elem.volunteer.professional.name===profession).map((elem) =>{
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
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                onChange={(e) => setEquipmentDescription(e.target.value)}
                outsidChange={(e) => setEquipmentCost(e.target.value)}
                label="Equipment cost"
                variant="outlined"
                fullWidth={true}
                sx={{ marginBottom: '10px' }}
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
                margin: '5px 0'
              }}
            >
              <Button onClick={onSubmit} variant="contained" color="primary">
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    )}
    else {
        return (
              <Loading />
          ) 
    }

}

export default NewProject
