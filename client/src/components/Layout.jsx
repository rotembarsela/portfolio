import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col mt-24 md:flex-row md:mt-0 md:ml-64 md:h-[95vh] min-h-[85vh]'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout