import React from 'react'
import Products from '../components/products/Products'
import CommonHead from '../components/commonHead/CommonHead'

function ProductsPage() {
  return (
    <>
      <div className='w-full'>
        <CommonHead CommonHead1Title="All Products" />
        <Products />
      </div>
    </>
  )
}

export default ProductsPage