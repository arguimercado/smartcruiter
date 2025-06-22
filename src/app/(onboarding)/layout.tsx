import React, { ReactNode } from 'react'
import Topbar from './_components/topbars/Topbar'
import Link from 'next/link'
import Image from 'next/image'

const RootLayout = ({children} : {children:ReactNode}) => {
  return (
   <div className='w-full min-h-screen  bg-sky-50'>
      <Topbar />
      <main>
         {children}
      </main>
      <footer className='border-t flex items-center justify-center bg-gray-50'>
         <div className='container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12'>
            <div className='flex items-center gap-2'>
               <Image src="/rec-logo.webp" alt="logo" width={32} height={50} className='w-[32px] h-[50px] object-cover' />
               Smart Cruiter
            </div>
            <nav className='flex flex-wrap gap-4 md:gap-6'>
               <Link className='text-sm hover:underline' href="#">Terms</Link>
               <Link className='text-sm hover:underline' href="#">Privacy</Link>
                <Link className='text-sm hover:underline' href="#">Contact Us</Link>
            </nav>
         </div>
      </footer>

   </div>
  )
}

export default RootLayout