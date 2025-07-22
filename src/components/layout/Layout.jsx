import React from 'react'
import Navbar from '../navbar/Navbar'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout