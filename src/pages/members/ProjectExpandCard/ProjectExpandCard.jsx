import { useState } from 'react'
import { Card, CardContent, Typography, IconButton, Collapse, TableContainer, Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const ProjectExpandCard = () => {
    const [expandedProject, setExpandedProject] = useState(false)
    const handleProjectExpandClick = () => {
      setExpandedProject(!expandedProject)
    }
  
 
    return (
    <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            alignSelf: 'center',
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" component="div">
              Project Information
            </Typography>
            <IconButton
              aria-expanded={expandedProject}
              onClick={handleProjectExpandClick}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </CardContent>
          <Collapse in={expandedProject} timeout="auto" unmountOnExit>
            <CardContent>
              <TableContainer>
                <Table size="small" aria-label="project details">
                  <TableHead>
                    <TableRow>
                      <TableCell>Project Name</TableCell>
                      <TableCell>Donation Goal</TableCell>
                      <TableCell>Donation Progress</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
{/*                     {isProject.map((project) => (
                    <TableRow>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Goal</TableCell>
                      <TableCell>Progress</TableCell>
                    </TableRow> */}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Collapse>
        </Card> 
  )
}

export default ProjectExpandCard