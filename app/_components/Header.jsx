import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

function Header() {
  return (
    <div className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white'>
    <div className=" flex gap-12 items-center ">
      
      <Image src={'/logo.svg'} width={120} height={120} alt='logo'/>
      <ul className='hidden md:flex gap-10'>
   
      Build Financial Freedom 
        <li className='hover:text-primary font-md text-sm cursor-pointer'>For Sale</li>
        <li className='hover:text-primary font-md text-sm cursor-pointer'>Land for Sale</li>
        <li className='hover:text-primary font-md text-sm cursor-pointer'>Agent Finder</li>
       
      </ul>
    </div>
    <div className='Flex gap-2'>
        <Button className='flex gap-2'><Plus className='h-5 w-5'/> Post Your Add </Button>
        <Button className='outline'>Login</Button>
    </div>
    </div>
  )
}

export default Header
