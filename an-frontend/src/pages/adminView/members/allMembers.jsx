import React, { useContext, useEffect } from 'react'
import { getMembersList } from '../../../services/members'
import { MemberContext } from '../../../context/memberListContext'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const AllMembers = () => {
  const { memberDataList } = useContext(MemberContext)
  const { membersList, setMembersList } = memberDataList

  useEffect(() => {
    getMembers()
  }, [])

  const getMembers = async () => {
    const members = await getMembersList()
    setMembersList(members)
  }

  const users = membersList.map((member, idx) => {
    return (
      <React.Fragment key={idx}>
        <h5>
          NAME: {member.name} LASTNAME: {member.lastname} ROLE: {member.role}
        </h5>
        <Link to={`/adminView/members/${member.id}`}>
          <Button>SEE PROFILE</Button>
        </Link>
      </React.Fragment>
    )
  })
  if (Object.keys(membersList).length !== 0) {
    return <>{users}</>
  }
}
export default AllMembers
