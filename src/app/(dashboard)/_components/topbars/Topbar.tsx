"use client"

import { useSidebar } from '@/components/ui/sidebar'
import React from 'react'
import UserAvatar from './UserAvatar'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Topbar = () => {
  
  const {toggleSidebar} = useSidebar();
  
  return (
    <nav className='w-full flex flex-row items-center justify-between  p-4 border-b bg-white'>
      <div className='flex items-center gap-2 text-lg font-semibold'>
         <Button onClick={toggleSidebar} variant='ghost' className='p-2'>
          <MenuIcon className='w-6 h-6 text-primary-200 cursor-pointer' />
        </Button>
        <div className='flex flex-col'>
          <h3 className='font-bold text-xl'>Welcome Back</h3>
          <p className='text-gray-400 text-sm font-light'>
            Manage your recruitment process efficiently
          </p>
        </div>
      </div>
      <UserAvatar />
    </nav>
  )
}

export default Topbar   