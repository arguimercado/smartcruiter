import React from 'react'
import NavMenus from './NavMenus'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Topbar = () => {
  return (
    <nav className='w-full flex flex-row items-center justify-between  p-4  bg-primary-100 h-[72px] fixed top-0 z-50'>
      <div className='flex items-center gap-2 text-lg font-semibold text-secondary-100'>
         <Image src="/rec-logo.webp" alt="logo" width={32} height={50} className='w-[32px] h-[50px] object-cover' />
         <span>SmartCruitment</span>
      </div>
      <NavMenus /> 
      <div>
        <Button className='btn' asChild>
          <Link href="/dashboard" className="w-full">
          Dashboard
          </Link>
          </Button>
      </div>     
    </nav>
  )
}

export default Topbar   