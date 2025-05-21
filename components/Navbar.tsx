import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav>
            <Link href="/">
            <Image src="/assets/icons/logo.svg" alt='logo' width={32} height={32}/>
             <h1>Capturely</h1>
            </Link>
           
        </nav>
    </header>
  )
}

export default Navbar