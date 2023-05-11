import { createContext } from 'react'
import { useState } from 'react'

const MemberContext = createContext([])

const MemberProvider = ({ children }) => {
  const [membersList, setMembersList] = useState([])
  const [memberData, setMemberData] = useState([])
  
  const list = { membersList, setMembersList }
  const data = { memberData, setMemberData }

  return (
    <MemberContext.Provider value={{ memberDataList: list, memberInfo: data }}>
      {children}
    </MemberContext.Provider>
  )
}

export { MemberProvider, MemberContext }
