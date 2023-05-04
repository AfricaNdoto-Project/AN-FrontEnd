import { useContext } from "react";
import {MemberContext} from '../context/memberProvider'

const useMember = () => {
    return useContext(MemberContext)
}

export default useMember