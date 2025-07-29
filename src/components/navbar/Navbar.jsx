import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <>
      <nav className='w-[256px] px-[25px] pt-[25px] bg-[#FFFFFF] '>
        <div className="container">
          <div>
            <ul className='flex flex-col gap-[20px]'>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-[14px] font-semibold font-poppins text-[#fff] px-[21px] py-[17px] bg-[#7364DB] rounded-2xl' : "text-[14px] font-semibold font-poppins text-[#7E7E8F] px-[21px] py-[17px]"}>Dashboard</NavLink>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'text-[14px] font-semibold font-poppins text-[#fff] px-[21px] py-[17px] bg-[#7364DB] rounded-2xl' : "text-[14px] font-semibold font-poppins text-[#7E7E8F] px-[21px] py-[17px]"}>Products</NavLink>
              <NavLink to="/orders" className={({ isActive }) => isActive ? 'text-[14px] font-semibold font-poppins text-[#fff] px-[21px] py-[17px] bg-[#7364DB] rounded-2xl' : "text-[14px] font-semibold font-poppins text-[#7E7E8F] px-[21px] py-[17px]"}>Orders</NavLink>
              <NavLink to="/payments" className={({ isActive }) => isActive ? 'text-[14px] font-semibold font-poppins text-[#fff] px-[21px] py-[17px] bg-[#7364DB] rounded-2xl' : "text-[14px] font-semibold font-poppins text-[#7E7E8F] px-[21px] py-[17px]"}>Payments</NavLink>
              <NavLink to="/transactions" className={({ isActive }) => isActive ? 'text-[14px] font-semibold font-poppins text-[#fff] px-[21px] py-[17px] bg-[#7364DB] rounded-2xl' : "text-[14px] font-semibold font-poppins text-[#7E7E8F] px-[21px] py-[17px]"}>Transactions</NavLink>
              <NavLink to="/clients" className={({ isActive }) => isActive ? 'text-[14px] font-semibold font-poppins text-[#fff] px-[21px] py-[17px] bg-[#7364DB] rounded-2xl' : "text-[14px] font-semibold font-poppins text-[#7E7E8F] px-[21px] py-[17px]"}>Clients</NavLink>
            </ul>
          </div>
          <div className='py-[21px] flex items-start flex-col gap-[10px] pl-[21px] border-t-[1px]  mt-[20px]'>
            <h1 className='text-[14px] font-semibold font-poppins text-[#07070C]'>Categories</h1>
            <ul className='flex flex-col gap-[12px] text-[14px] font-normal font-poppins text-[#7E7E8F]'>
              <li><Link to="#">Category 1</Link></li>
              <li><Link to="#">Category 2</Link></li>
              <li><Link to="#">Category 3</Link></li>
            </ul>
            <button className='text-[14px] font-semibold font-poppins text-[#7364DB] pt-2 '>Add Category</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar