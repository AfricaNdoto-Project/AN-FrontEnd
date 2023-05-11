import { useContext } from 'react'
import { AdminContext } from '../context/isAdminProvider'
const useIsAdmin = () => {
  return useContext(AdminContext)
}

export default useIsAdmin
