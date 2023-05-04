import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { useState } from 'react'
import { AuthContext } from './context/authContext'
import {MemberProvider} from './context/memberProvider'

function App() {

  
  const [auth, setAuth] = useState({})

  const verify = {auth, setAuth}



  return (
    <>
    <AuthContext.Provider value={verify}>
      <MemberProvider>
        <RouterProvider router={router} />
        </MemberProvider>
      </AuthContext.Provider>
    </>
  )
}

export default App
