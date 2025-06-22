import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import React, { ReactNode } from 'react'

const BackButton = ({children,className, onBackClick} : {children: ReactNode,className?:string, onBackClick?: () => void}) => {
  return (
    <div className={cn('flex flex-row items-center  w-full', className)}>
      <Button variant={'ghost'}  onClick={onBackClick}>
         <ArrowLeft className='size-6' />
      </Button>
      {children}
      
    </div>
  )
}

export default BackButton