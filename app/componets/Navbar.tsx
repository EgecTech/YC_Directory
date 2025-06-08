import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <header className='px-5 py-3 by-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'><Image src="/logo.webp" width={144} height={30} alt={'Logo '}/></Link>
      </nav>
      
    </header>
  )
}

export default Navbar
