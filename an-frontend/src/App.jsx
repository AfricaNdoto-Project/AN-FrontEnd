import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { useState } from 'react'
import { UserContext } from './context/userContext'

function App() {
const [user, setUser] = useState({})
const member = { user, setUser}

  return (
    <>
    <UserContext.Provider value={ member }>
      <RouterProvider router= { router } />
    </UserContext.Provider>
    </>
  )
}

export default App
