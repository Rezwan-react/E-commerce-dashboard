import React, { useState } from 'react'
import { BiChevronDown, BiUser } from 'react-icons/bi';
import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from 'react-icons/fa6';
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io';
import { TiExport } from 'react-icons/ti';
import { Link } from 'react-router';

function Heading() {
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const handleProfileClick = () => {
        setProfileDropdownOpen((prev) => !prev);
    };

    return (
        <header className="px-[38px] py-5 bg-white shadow-sm fixed w-full top-0 left-0 z-50">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div>
                    <img src="logo.png" alt="Logo" className="h-10" />
                </div>

                {/* Search Bar */}
                <div className="flex items-center gap-3 bg-[#F5F5FA] pl-4 pr-2 rounded-xl w-[400px]">
                    <CiSearch className="text-[22px] text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search....."
                        className="flex-1 text-sm font-medium font-poppins text-[#7E7E8F] py-2.5 bg-[#F5F5FA] outline-none"
                    />
                </div>

                {/* Browse */}
                <div>
                    <ul className="flex items-center gap-2">
                        <li>
                            <TiExport className="text-[24px] text-gray-400 cursor-pointer hover:text-gray-600 active:scale-95" />
                        </li>
                        <li className="text-sm text-[#7E7E8F] font-semibold cursor-pointer hover:text-gray-900">
                            Browse
                        </li>
                        <li>
                            <IoIosArrowDown className="text-[18px] text-gray-500" />
                        </li>
                    </ul>
                </div>

                {/* Right Side Icons + Profile */}
                <div className="flex items-center gap-5 relative">
                    <button className="hover:text-gray-700 active:scale-95">
                        <FaRegMessage className="text-[20px] text-[#7E7E8F]" />
                    </button>
                    <button className="hover:text-gray-700 active:scale-95">
                        <IoMdNotificationsOutline className="text-[24px] text-[#7E7E8F]" />
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative">
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

                        {profileDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Sign Out
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Heading;
