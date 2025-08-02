import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from 'react-icons/fa6';
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io';
import { TiExport } from 'react-icons/ti';

function Heading() {
    return (
        <>
            <header className="px-[38px] py-7 bg-[#FFFFFF]">
                <div className="container flex justify-between items-center ">
                    <div>
                        <img src="logo.png" alt="Logo" />
                    </div>
                    <div className='flex items-center gap-4  bg-[#F5F5FA] pl-4 rounded-[12px]'>
                        <button className='active:scale-95'><CiSearch className='text-[25px] ' /></button>
                        <input type="text" placeholder="Search....." className="w-[350px] text-[14px] font-semibold font-poppins text-[#7E7E8F] py-3.5 bg-[#F5F5FA] pl-4 rounded-[12px] outline-none" />
                    </div>
                    <div>
                        <ul className='flex items-center gap-4'>
                            <li><TiExport className='text-[25px] text-[#CCCCCC] active:scale-95' /></li>
                            <li className='text-[14px] text-[#7E7E8F] font-semibold'>Browse</li>
                            <li className='text-[14px] text-[#7E7E8F] font-semibold'><IoIosArrowDown /></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button ><FaRegMessage className='text-[20px] text-[#7E7E8F] ' /></button>
                        <button ><IoMdNotificationsOutline className='text-[24px] text-[#7E7E8F] ' /></button>
                        <div className='w-[48px] h-[48px] rounded-full overflow-hidden'>
                            <img src="/images/Profile.jpg" alt="Profile" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Heading