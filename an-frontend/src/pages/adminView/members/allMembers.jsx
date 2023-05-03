import { useContext } from "react"
import { MemberContext } from "../../../context/memberContext"
import MemberData from "../../../components/memberData/memberData"

const AllMembers = () => {
  const data = useContext(MemberContext)

  return (
    <div >{MemberData()}</div>
  )
}

export default AllMembers
