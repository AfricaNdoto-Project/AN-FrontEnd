import { createContext } from 'react'
import { useState } from 'react'

const AdminContext = createContext([])

const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const adminData = {isAdmin, setIsAdmin}
  return (
    <AdminContext.Provider value={{ adminData }}>
      {children}
    </AdminContext.Provider>
  )
}

export { AdminProvider, AdminContext }
