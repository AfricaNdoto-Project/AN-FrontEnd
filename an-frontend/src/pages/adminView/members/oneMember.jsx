import React, { useContext, useEffect, useState } from 'react'
import { MemberContext } from '../../../context/memberListContext'
import { getOneMember } from '../../../services/members'
import { useParams } from 'react-router-dom'
import { getDonations } from '../../../services/donors'

const OneMember = () => {
  const { memberInfo } = useContext(MemberContext)
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
    const donations = await getDonations(id)
    setDonationsList(donations)
  }

  const donation = donationsList.map((donation, idx) => {
    return (
      <React.Fragment key={idx}>
        {donation.amount}
        {donation.type}
        {donation.productId}
      </React.Fragment>
    )
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
        {donation}
      </div>
    )
  }
}

export default OneMember
