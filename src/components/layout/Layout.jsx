import React from 'react'
import Navbar from '../navbar/Navbar'
import Heading from '../heading/heading'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
            <Heading/>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout