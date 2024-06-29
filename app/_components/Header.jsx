"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignOutButton } from "@clerk/nextjs";

function Header() {

    const path = usePathname();

    useEffect(() => {
        console.log(path)
    }, [])
  return (
    <div className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white'>
    <div className=" flex gap-12 items-center ">
      
      <Image src={'/logo.svg'} width={120} height={120} alt='logo'/>
      <ul className='hidden md:flex gap-10'>
   
      Build Financial Freedom 
        <Link href={'/'} ><li className={`'hover:text-primary font-md text-sm cursor-pointer'${path=='/'&& 'text-primary'}`}>For Sale</li></Link>
        <li className='hover:text-primary font-md text-sm cursor-pointer'>Land for Sale</li>
        <li className='hover:text-primary font-md text-sm cursor-pointer'>Agent Finder</li>
       
      </ul>
    </div>
    <div className='Flex gap-2'>
        <Button className='flex gap-2'><Plus className='h-5 w-5'/> Post Your Add </Button>
        <Button className='outline'>Login</Button>
        <SignOutButton />
    </div>
    </div>
  )
}

export default Header
