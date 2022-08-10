import React, { useEffect, useRef, useState } from 'react'
import IconUtil from '../utils/IconUtil'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import MobileMenuIconUtil from '../utils/MobileMenuIconUtil'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const useOutsideClick = (ref, handler) => {
    useEffect(() => {
        const listener = e => {
            const element = ref?.current

            if (!element || element.contains(e.target)) {
                return
            }

            handler(e)
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [open, setOpen] = useState(false)
    const navRef = useRef()

    useOutsideClick(navRef, () => setOpen(false))

    return (
        <>
            <nav className='fixed top-0 left-0 z-10 w-screen h-24 m-0 text-white shadow-lg bg-navbg md:w-64 md:h-screen'>
                {/* Wrapper */}
                <div ref={navRef} className='flex items-center justify-between h-full md:flex-col'>
                    {/* Top */}
                    <div className='mx-5 text-xl md:mx-0 md:my-3'>
                        <div className='gap-2 hidden'>
                            {isDarkMode ?
                                <>
                                    <IconUtil icon={<MdDarkMode size={24} color='gray' />} isDarkModeIcon setIsDarkMode={setIsDarkMode} />
                                </>
                                :
                                <>
                                    <IconUtil icon={<MdLightMode size={24} color='yellow' />} isDarkModeIcon setIsDarkMode={setIsDarkMode} />
                                </>
                            }
                        </div>
                    </div>
                    {/* Center */}
                    <div className=''>
                        <ul className={`absolute left-0 flex-col w-full mt-11 gap-2 h-[40vh] justify-center md:h-auto md:mt-0 uppercase md:w-64 bg-navbg md:static md:items-center md:flex ${open ? 'flex' : 'hidden'}`}>
                            <li className='nav-list-item' onClick={() => setOpen(false)}>
                                <NavLink exact='true' to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Home
                                </NavLink>
                            </li>
                            <li className='nav-list-item' onClick={() => setOpen(false)}>
                                <NavLink to='/projects' className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Projects
                                </NavLink>
                            </li>
                            <li className='nav-list-item' onClick={() => setOpen(false)}>
                                <NavLink to='/playground' className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Playground
                                </NavLink>
                            </li>
                            <li className='nav-list-item' onClick={() => setOpen(false)}>
                                <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className='flex justify-center items-center'>
                                <div className='flex-row gap-5 mb-3 flex md:hidden'>
                                    <a href='https://www.linkedin.com/in/rotembarsela/' target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={8} className='text-[#0A66C2] w-6 h-6 cursor-pointer' />
                                    </a>
                                    <a href='https://github.com/rbsPREET/portfolio' target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={8} className='text-[#171515] w-6 h-6 cursor-pointer' href='' target='_blank' />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Bottom */}
                    <div className='mx-2 md:mx-0 md:my-2'>
                        {/* UNDER DEVELOPMENT (BACKEND)
                        <span className='hidden'>
                            <IconUtil icon={<RiLock2Line size={24} />} />
                        </span>
                         */}
                        <div className='flex-row gap-5 mb-3 hidden md:flex'>
                            <a href='https://www.linkedin.com/in/rotembarsela/' target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} className='text-[#0A66C2] w-8 h-8 cursor-pointer' />
                            </a>
                            <a href='https://github.com/rbsPREET/portfolio' target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} className='text-[#171515] w-8 h-8 cursor-pointer' href='' target='_blank' />
                            </a>
                        </div>
                        <span className='md:hidden'>
                            {open ?
                                <MobileMenuIconUtil icon={<RiCloseLine size={24} />} setOpen={setOpen} />
                                :
                                <MobileMenuIconUtil icon={<RiMenuLine size={24} />} setOpen={setOpen} />
                            }
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar