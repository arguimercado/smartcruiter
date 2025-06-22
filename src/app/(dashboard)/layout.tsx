
import { SidebarProvider } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'
import Topbar from './_components/topbars/Topbar'
import AppSidebar from './_components/sidebars/AppSidebar'

const AppLayout = ({children} : {children: ReactNode}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full flex flex-col'>
         <Topbar />
         <div className='w-full p-10'>
          {children}
         </div>
      </main>
    </SidebarProvider>
  )
}

export default AppLayout