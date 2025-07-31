import React from 'react'
import OrderDetails from '../components/orderDetails/OrderDetails'
import CommonHead from '../components/commonHead/CommonHead'

function OrderDetailspage() {
    return (
        <>
            <div className='w-full'>
                <CommonHead CommonHead1Title="Order Details" />
                <OrderDetails />
            </div>
        </>
    )
}

export default OrderDetailspage