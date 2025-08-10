import React from 'react'
import Navbar from '../navbar/Navbar'
import Heading from '../heading/heading'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux';

function Layout() {
    const userData = useSelector((state) => state.authSlice.user);

      if(!userData){
    return <Navigate to="/login"/>
  }

    return (
        <>
            <Heading />
            <div className='flex gap-2'>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout