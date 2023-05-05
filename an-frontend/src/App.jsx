import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { MemberProvider } from './context/memberProvider'

function App() {
  return (
    <>
      <MemberProvider>
        <RouterProvider router={router} />
      </MemberProvider>
    </>
  )
}

export default App
