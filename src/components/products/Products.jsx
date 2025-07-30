import React from 'react'


function Products() {
    return (
        <>
            <section className='w-[1136px] bg-[#fff] p-6'>
                <div className="container">
                    <div className='bg-[#E8EDF2] p-4 rounded-lg'>
                        <ul className='flex justify-between items-center  '>
                            <li>Image</li>
                            <li>Name</li>
                            <li>SKU</li>
                            <li>Price</li>
                            <li>Status</li>
                            <li>Quantity</li>
                            <li>Rating</li>
                            <li>Sales</li>
                        </ul>
                        <div className='flex justify-between items-center  '>
                            <img src="/images/p.png" alt="Product One" />
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex flex-col justify-center items-start'>
                                    <p>Product One</p>
                                    <p>Lorem ipsum dolor </p>
                                </div>
                                <p>SKU12345</p>
                                <p>$29.99</p>
                                <p>In Stock</p>
                                <p>100</p>
                                <p>4.5/5</p>
                                <p>50 Sales</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Products