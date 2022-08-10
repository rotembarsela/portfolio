import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col mt-24 md:flex-row md:mt-0 md:ml-64 h-[calc(100vh-96px)] md:h-[100vh] min-h-[85vh]'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout