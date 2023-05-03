import React from 'react'
import deleteMember from '../../../services/deleteMember'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const Delete = () => {
    // useEffect(() => {
    //     deleteMemberById()
    // }, [])
    const { id } = useParams()
    console.log(id)

    const deleteMemberById = async () => {
        await deleteMember(id)
        localStorage.removeItem('token')
        alert('member delete')
    }

  return (
    <button onClick={deleteMemberById}>Delete Member</button>
  )
}

export default Delete