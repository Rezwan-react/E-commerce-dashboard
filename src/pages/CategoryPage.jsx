import React from 'react'
import CommonHead from '../components/commonHead/CommonHead'
import CategoryDetails from '../components/category/CategoryDetails'

function CategoryPage() {
    return (
        <>
            <div className='w-full'>
                <CommonHead CommonHead1Title="Category Details" />
                <CategoryDetails />
            </div>
        </>
    )
}

export default CategoryPage