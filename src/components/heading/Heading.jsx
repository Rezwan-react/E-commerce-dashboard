import React, { useState } from 'react'
import { BiChevronDown, BiUser } from 'react-icons/bi';
import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from 'react-icons/fa6';
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io';
import { TiExport } from 'react-icons/ti';
import { Link } from 'react-router';

function Heading() {
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    // Example click handler for profile button
    const handleProfileClick = () => {
        setProfileDropdownOpen((prev) => !prev);
    };

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
                        <div>
                            <button
                                onClick={handleProfileClick}
                                className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 active:scale-95"
                            >
                                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                                    <BiUser className="h-4 w-4 text-gray-600" />
                                </div>
                                <span className="text-sm font-medium">Admin</span>
                                <BiChevronDown className="h-4 w-4 text-gray-500" />
                            </button>
                            {/* Example dropdown */}
                            {profileDropdownOpen && (
                                <div className="absolute right-10 top-20 bg-white shadow-lg rounded-md p-4 z-50">
                                    <Link to="/profile" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Profile </Link>
                                    <Link to="#" className="block w-full text-left px-4 py-2 hover:bg-gray-100">Sign Out</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Heading