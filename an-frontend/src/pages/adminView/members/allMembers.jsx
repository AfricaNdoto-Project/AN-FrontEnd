import { useState, useEffect } from 'react'
import { getMembersList } from '../../../services/admin/allMembers'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const AllMembers = () => {
  const [membersList, setMembersList] = useState([])

  useEffect(() => {
    getMembers()
  }, [])

  const getMembers = async () => {
    const members = await getMembersList()
    setMembersList(members)
  }

  const displayMembers = () => {
    return membersList.map((member, idx) => {
      return <div key={idx}>
        {member.name}
        {member.lastname}
        {member.role}
        <Link to={`/members/${member.id}`}>
        <Button>
          See Profile
        </Button>
        </Link>

        </div>
    })
  }
  if(membersList !== 0) {
    return (
        <div>
          <h2>MEMBERS</h2>
          {displayMembers()}
        </div>
      )
  }

}

export default AllMembers
