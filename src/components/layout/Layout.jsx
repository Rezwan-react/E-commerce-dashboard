import React from 'react'
import Navbar from '../navbar/Navbar'
import Heading from '../heading/heading'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux';

function Layout() {
  const userData = useSelector((state) => state.authSlice.user);

  if (!userData) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Heading />
      <div className="flex">
        <Navbar />
        <div className="flex-1 ml-[256px] p-6 mt-20">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout