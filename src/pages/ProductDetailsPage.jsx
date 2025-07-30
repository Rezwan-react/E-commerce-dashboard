import React from 'react'
import CommonHead from '../components/commonHead/CommonHead'
import ProductDetails from '../components/productDetails/ProductDetails'

function ProductDetailsPage() {
  return (
    <>
    <div className='w-full'> 
        <CommonHead CommonHead1Title="Product Details" />
        <ProductDetails/>
    </div>
    </>
  )
}

export default ProductDetailsPage