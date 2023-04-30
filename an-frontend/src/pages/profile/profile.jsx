import { UserContext } from '../../context/userContext'
import { useEffect, useContext, useState } from "react"
import getProfile from '../../services/userService'
import getDonations from '../../services/memberDonations'
import getProjects from '../../services/projectsService'
import './profile.css'

const Profile = () => {
  const [donation, setDonation] = useState([])
  const [projects, setProjects] = useState([])
  const {user, setUser} = useContext(UserContext)


  useEffect(() => {
    getData()
    getProjects()
  }, [])

  const getData = async () => {
    const result = await getProfile()
    const donations = await getDonations()
    const project = await getProjects()
    setProjects(project)
    setUser(result)
    setDonation(donations)
  }

  const displayUserName = () => {
    console.log(projects)
    return (
      <>
        <div>{user.name}</div>
        <div>{user.role}</div>
      </>
    )
  }

  const displayProjects = () => {
    return projects.map(elem => {
      return (
        <div className='donation' key={ elem.id }>
          <div ><h3>Project Name: { elem.name }</h3></div>
          <div><p>Target: </p>{elem.target}</div>
          <div><p>Description: </p>{elem.description}</div>
        </div>
      )
    })
  }


  const displayDonations = () => {
    return donation.donations.map(elem => {
      return (
        <div className='donation' key={ elem.id }>
          <div ><h3>Donation { elem.id }</h3></div>
          <div><p>Amount: </p>{elem.amount}</div>
          <div><p>Type: </p>{elem.type}</div>
        </div>
      )
    })
  }

  const displayData = () => {
    if(user.role === 'donor') {
      displayDonations()
    }
    else if(user.role === 'volunteer') {
      console.log('aqui los proyectos')
    }
    else {
      console.log('aqui proyectos y donaciones')
    }
  }
 if(user !== undefined && Object.keys(donation).length !== 0 ) {
   return (
     <>
      { displayUserName() }
      <div className='donations'>
        { displayData() }
        { displayProjects() }
       {/* { user.role === 'donor' ? displayDonations() : 'aqui los proyectos a los que perteneces' } */}
       {/* { user.role === 'volunteer_donor' ? displayDonations() : 'aqui los proyectos a los que perteneces' } */}
      </div>
     </>
   )
 }
}

export default Profile