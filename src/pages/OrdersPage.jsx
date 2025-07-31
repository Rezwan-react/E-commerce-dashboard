import React from 'react'
import Orders from '../components/orders/Orders'
import CommonHead from '../components/commonHead/CommonHead'

function OrdersPage() {
  return (
    <>
      <div className='w-full'>
        <CommonHead CommonHead1Title="Orders List" />
        <Orders />
      </div>

    </>
  )
}

export default OrdersPage