'use client'
import React from 'react'
import Box from '../Box'
import Logo from './Logo'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 w-full bg-white z-10 shadow-sm'>
       <Box>
        <nav className='flex justify-between items-center'>
            <Logo size="125px"/>
            <AuthLinks />
        </nav>
       </Box>
    </header>
  )
}

export default Navbar