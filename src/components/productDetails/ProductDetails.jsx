import React from 'react'
import { CiCircleRemove } from 'react-icons/ci'

function ProductDetails() {
    return (
        <>
            <section className='w-[1136px] bg-[#fff] p-6 mt-[68px] ml-6 rounded-2xl'>
                <div className="container">
                    <form>
                        <div className='flex justify-between items-start gap-6'>
                            {/*======================== Product Information =============================*/}
                            <div>
                                <div className='flex flex-col gap-4'>
                                    <label className='text-[16px] font-medium font-poppins text-[#07070C]'>Product Name</label>
                                    <input type="text" placeholder='Enter product name' className='w-[527px] px-[16px] py-[13px] text-[16px] font-medium font-poppins text-[#9A9AAF] border border-[#07070C] p-2 rounded-md focus:outline-none' />
                                </div>
                                <div className='flex flex-col gap-4 mt-[48px]'>
                                    <label className='text-[16px] font-medium font-poppins text-[#07070C]'>Product Description</label>
                                    <textarea placeholder='Enter product description' className='w-[527px] px-[16px] py-[13px] text-[16px] font-medium font-poppins text-[#9A9AAF] border border-[#07070C] p-2 rounded-md focus:outline-none' />
                                </div>
                                <div className='flex flex-col gap-4 mt-[48px]'>
                                    <label className='text-[16px] font-medium font-poppins text-[#07070C]'>Category</label>
                                    <input type="text" placeholder='Enter product name' className='w-[527px] px-[16px] py-[13px] text-[16px] font-medium font-poppins text-[#9A9AAF] border border-[#07070C] p-2 rounded-md focus:outline-none' />
                                </div>
                                <div className='flex gap-6 mt-[48px]'>
                                    <div className='flex flex-col gap-4 mt-[48px]'>
                                        <label className='text-[16px] font-medium font-poppins text-[#07070C]'>SKU</label>
                                        <input type="text" placeholder='Enter product SKU' className='w-[252px] px-[16px] py-[13px] text-[16px] font-medium font-poppins text-[#9A9AAF] border border-[#07070C] p-2 rounded-md focus:outline-none' />
                                    </div>
                                    <div className='flex flex-col gap-4 mt-[48px]'>
                                        <label className='text-[16px] font-medium font-poppins text-[#07070C]'>Stock quantity</label>
                                        <input type="text" placeholder='Enter product stock quantity' className='w-[252px] px-[16px] py-[13px] text-[16px] font-medium font-poppins text-[#9A9AAF] border border-[#07070C] p-2 rounded-md focus:outline-none' />
                                    </div>
                                </div>
                                <div className='flex gap-6 mt-[48px]'>
                                    <div className='flex flex-col gap-4 mt-[48px]'>
                                        <label className='text-[16px] font-medium font-poppins text-[#07070C]'>Regular Price</label>
                                        <input type="text" placeholder='Enter product regular price' className='w-[252px] px-[16px] py-[13px] text-[16px] font-medium font-poppins text-[#9A9AAF] border border-[#07070C] p-2 rounded-md focus:outline-none' />
                                    </div>
                                    <div className='flex flex-col gap-4 mt-[48px]'>
                                        <label className='text-[16px] font-medium font-poppins text-[#07070C]'>Sale Price</label>
                                        <input type="text" placeholder='Enter product sale price' className='w-[252px] px-[16px] py-[13px] text-[16px] font-medium font-poppins text-[#9A9AAF] border border-[#07070C] p-2 rounded-md focus:outline-none' />
                                    </div>
                                </div>
                            </div>
                            {/* ======================== Product Image ============================= */}
                            <div>
                                <div className='flex flex-col gap-4 mt-[48px]'>
                                    <p className='text-[16px] font-medium font-poppins text-[#07070C]'>Product Image</p>
                                    <img src="/images/Rectangle.png" alt="" className='w-[483px] h-[483px] border border-[#07070C] p-2 rounded-md focus:outline-none mt-2' />
                                </div>
                                <div className="flex flex-col items-center justify-center w-[483px] h-[220px] border-2 border-dashed border-[#07070C] rounded-md bg-[#F9F9FB] mt-[48px]">
                                    <label htmlFor="product-image-upload" className="cursor-pointer flex flex-col items-center">
                                        <img src="/images/upload-icon.png" alt="Upload Icon" className="w-12 h-12 mb-2" />
                                        <span className="text-[16px] font-medium font-poppins text-[#07070C] mb-2">Upload Product Image</span>
                                        <span className="text-[14px] text-[#9A9AAF] mb-2">PNG, JPG, JPEG up to 5MB</span>
                                        <input id="product-image-upload" type="file" className="hidden" />
                                    </label>
                                </div>
                                <div className='w-[320px] flex gap-3 items-center mt-[48px] bg-[#E8EDF2]  p-2 rounded-md'>
                                    <img src="/images/Rectangle.png" alt="" className='w-[50px] h-[50px] border border-[#07070C] p-2 rounded-md focus:outline-none mt-2' />
                                    <input type="range" className='w-[300px] ' />
                                    <button className='text-[14px] text-[#07070C] font-semibold font-poppins active:scale-95'>
                                        <CiCircleRemove className='text-[25px] text-[#07070C] font-semibold ' />
                                    </button>
                                </div>
                                <div className='flex justify-center items-center gap-4 mt-[48px]'>
                                    <button className='flex-1 min-w-[100px] h-[48px] bg-[#F5F5F5] text-[#07070C] text-[16px] font-medium font-poppins rounded-md active:scale-95 hover:bg-[#7364DB] hover:text-white  '>Save Product</button>
                                    <button className='flex-1 min-w-[100px] h-[48px] bg-[#F5F5F5] text-[#07070C] text-[16px] font-medium font-poppins rounded-md active:scale-95 hover:bg-[#e23737c9] '>Cancel</button>
                                    <button className='flex-1 min-w-[100px] h-[48px] bg-[#F5F5F5] text-[#07070C] text-[16px] font-medium font-poppins rounded-md active:scale-95 hover:bg-[#E23738] hover:text-white transition-colors'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ProductDetails