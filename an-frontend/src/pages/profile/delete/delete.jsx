import React from 'react'
import deleteMember from '../../../services/deleteMember'
import { useParams, redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'




const Delete = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)

    const deleteMemberById = async () => {
        await deleteMember(id)
        localStorage.removeItem('token')
        alert('Account deleted')
        return navigate('/login')
    }

  return (
    <>
      <h2>Are you Sure?</h2>
      <button onClick={deleteMemberById}>Delete Account</button>
    </>
  )
}

export default Delete