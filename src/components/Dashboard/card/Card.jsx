import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaYCombinator } from 'react-icons/fa'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'

function Card({ title, cardButton, value, percentage, comparedTo }) {
    return (
        <>
            <div className='bg-white p-4 rounded-lg shadow-md'>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-[14px] font-normal font-poppins text-[#7E7E8F]'>{title}</h3>
                    <button className='text-blue-500 hover:underline'><BsThreeDotsVertical /> {cardButton}</button>
                </div>
                <div className='flex justify-between gap-2'>
                    <p className='text-[16px] font-bold font-poppins text-[#07070C] flex items-center gap-2'><samp><FaYCombinator /></samp>{value}</p>
                    <p className='text-[16px] font-semibold font-poppins text-[#50D1B2] flex items-center gap-2'><samp><HiOutlineArrowTopRightOnSquare /></samp> {percentage}</p>
                </div>
                <div className=''>
                    <p className='text-[13px] font-bold font-poppins text-[#9A9AAF] text-right'> {comparedTo}</p>
                </div>
            </div>
        </>
    )
}

export default Card