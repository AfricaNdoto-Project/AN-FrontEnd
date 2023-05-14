import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { useState } from 'react'
import { UserContext } from './context/userContext'
import { MemberProvider } from './context/memberProvider'

function App() {
  const [user, setUser] = useState('')
  const member = { user, setUser }

  return (
    <>
      <UserContext.Provider value={member}>
        <MemberProvider>

            <RouterProvider router={router} />
        </MemberProvider>
      </UserContext.Provider>
    </>
  )
}

export default App
