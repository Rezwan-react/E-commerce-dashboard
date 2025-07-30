import React from 'react'


function Products() {
    return (
        <>
            <section className='w-[1136px] bg-[#fff] p-6 mt-[68px] ml-6 rounded-2xl'>
                <div className="container">
                    <div className='w-[1086px] p-4 rounded-lg'>
                        <div className='grid grid-cols-8 gap-4 text-[12px] font-semibold font-poppins text-[#7E7E8F] mb-4'>
                            <div className='flex flex-col items-center'>
                                <h2>Image</h2>
                                <div className='w-[82px] h-[82px] flex items-center justify-center  border-2 border-[#E8EDF2] rounded-[8px] overflow-hidden'>
                                    <img src="/images/p.png" alt="Product One" className='w-[82px] h-[82px] object-cover rounded-[8px] mt-2' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-[12px] font-semibold font-poppins mb-[14px] text-[#7E7E8F]'>Name</h2>
                                <p className='mt-2 text-[14px] font-semibold font-poppins text-[#262631]'>Product One</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-[12px] font-semibold font-poppins mb-[14px] text-[#7E7E8F]'>SKU</h2>
                                <p className='mt-2 text-[14px] font-normal font-poppins text-[#7E7E8F]'>SKU12345</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-[12px] font-semibold font-poppins mb-[14px] text-[#7E7E8F]'>Price</h2>
                                <p className='mt-2 text-[14px] font-semibold font-poppins text-[#07070C]'>$29.99</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-[12px] font-semibold font-poppins mb-[14px] text-[#7E7E8F]'>Status</h2>
                                <p className='mt-2 text-[14px] font-semibold font-poppins text-[#07070C]'>Activek</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-[12px] font-semibold font-poppins mb-[14px] text-[#7E7E8F]'>Quantity</h2>
                                <p className='mt-2 text-[14px] font-normal font-poppins text-[#7E7E8F]'>100</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-[12px] font-semibold font-poppins mb-[14px] text-[#7E7E8F]'>Rating</h2>
                                <p className='mt-2 text-[14px] font-normal font-poppins text-[#FEA73E]'>4.5/5</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-[12px] font-semibold font-poppins mb-[14px] text-[#7E7E8F]'>Sales</h2>
                                <p className='mt-2 text-[14px] font-semibold font-poppins text-[#07070C]'>50 Sales</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Products