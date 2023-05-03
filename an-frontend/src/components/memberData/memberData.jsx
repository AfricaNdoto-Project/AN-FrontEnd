import { useState, useEffect } from 'react'
import { getMembersList } from '../../services/admin/allMembers'

const MemberData = () => {
  const [membersList, setMembersList] = useState([])

  useEffect(() => {
    getMembers()
  }, [])

  const getMembers = async () => {
    const members = await getMembersList()
    setMembersList(members)
  }

  const displayMembers = () => {
    return membersList.map((member) => {
      return (
        <>
        {member.name}
        </>
        
        )
    })
  }
  if (membersList !== 0) {
    return <>{displayMembers()}</>
  }
}

export default MemberData
