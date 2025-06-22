import { onBoardMenu } from '@/data/items'
import Link from 'next/link'

import React from 'react'



const NavMenus = () => {
  return (
    <div className='max-sm:hidden text-sm lg:text-base flex-1 flex items-center justify-center'>
      <ul className='flex items-center lg:gap-2'>
        {onBoardMenu.map((item) => (
          <li key={item.title}>
            <Link
              href={item.link}
              className=" hover:bg-primary-200 transition-colors px-2 py-2 rounded-lg text-secondary-100"
              aria-current={typeof window !== 'undefined' && window.location.pathname === item.link ? 'page' : undefined}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default NavMenus