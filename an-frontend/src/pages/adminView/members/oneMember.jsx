import React, { useEffect, useState } from 'react'
import { getOneMember } from '../../../services/membersService'
import { useParams } from 'react-router-dom'
import { getDonorDonations } from '../../../services/donorsService'
import useMember from '../../../hooks/useMember'

const OneMember = () => {
  const { memberInfo } = useMember()
  const { memberData, setMemberData } = memberInfo
  const [donationsList, setDonationsList] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getMember()
    getMyDonations()
  }, [])

  const getMember = async () => {
    const member = await getOneMember(id)
    setMemberData(member)
  }

  const getMyDonations = async () => {
    const donations = await getDonorDonations(id)
    setDonationsList(donations)
  }

  const isDonor = donationsList.map((donation, idx) => {
    if (memberData.role !== 'volunteer' && Object.keys(donation).length !== 0) {
      return (
        <React.Fragment key={idx}>
          {donation.amount}
          {donation.type}
          {donation.productId}
        </React.Fragment>
      )
    } else {
      null
    }
  })

  if (Object.keys(memberData).length !== 0) {
    return (
      <div>
        {memberData.name}
        {memberData.lastname}
        {memberData.email}
        {memberData.idNumer}
        {memberData.phone}
        {memberData.role}
        {isDonor}
      </div>
    )
  }
}

export default OneMember
