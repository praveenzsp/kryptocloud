import React from 'react'
import {useRouter} from 'next/router'

function Navbar() {
  const router=useRouter()
  return (
    <div className='w-full lg:w-full bg-gradient-to-tl from-gray-900 to-black h-20 fixed lg:flex lg:justify-between lg:items-center lg:px-52 z-10 -top-2'>
        <h1 onClick={e=>router.push('/')} id='logo' className="bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block text-transparent bg-clip-text font-sora text-center text-[30px] tracking-widest font-extrabold pt-4 lg:pt-0 pl-4 lg:pl-0">KRYPTO<span className='text-white'>CON</span></h1>
        <ul className='flex gap-12 lg:justify-between text-white text-[17px] font-sora invisible lg:visible tracking-widest'>
            <li><a onClick={e=>router.push('/')}>Home</a></li>
            <li><a onClick={e=>router.push('/search')}>Cryptocurrency</a></li>
            <li><a onClick={e=>router.push('/marketplace')}>Marketplace</a></li>
            
        </ul>
    </div>
  )
}

export default Navbar