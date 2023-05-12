import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { useState } from 'react'
import { UserContext } from './context/userContext'
import { MemberProvider } from './context/memberProvider'
import { AdminProvider } from './context/isAdminProvider'

function App() {
  const [user, setUser] = useState('')
  const member = { user, setUser }

  return (
    <>
      <UserContext.Provider value={member}>
        <MemberProvider>
          <AdminProvider>
            <RouterProvider router={router} />
          </AdminProvider>
        </MemberProvider>
      </UserContext.Provider>
    </>
  )
}

export default App
