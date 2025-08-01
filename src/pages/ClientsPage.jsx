import React from 'react'
import Clients from '../components/Clients/Clients'
import CommonHead from '../components/commonHead/CommonHead'

function ClientsPage() {
  return (
    <>
      <div className='w-full'>
        <CommonHead CommonHead1Title="Clients List" />
        <Clients />
      </div>
    </>
  )
}

export default ClientsPage