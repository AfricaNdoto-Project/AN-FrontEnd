import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { useState } from 'react'
import { MemberContext } from './context/memberListContext'

function App() {
  const [membersList, setMembersList] = useState([])
  const [memberData, setMemberData] = useState([])

  const list = { membersList, setMembersList }
  const data = {memberData, setMemberData}

  return (
    <>
      <MemberContext.Provider value={{memberDataList: list, memberInfo: data}}>
        <RouterProvider router={router} />
      </MemberContext.Provider>
    </>
  )
}

export default App
