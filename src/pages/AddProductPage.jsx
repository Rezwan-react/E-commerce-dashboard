import React from 'react'
import CommonHead from '../components/commonHead/CommonHead'
import AddProduct from '../components/productDetails/AddProduct'

function AddProductPage() {
  return (
    <>
    <div className='w-full'> 
        <CommonHead CommonHead1Title="Product Details" />
        <AddProduct/>
    </div>
    </>
  )
}

export default AddProductPage