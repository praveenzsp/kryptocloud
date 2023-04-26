import React from 'react'

function Navbar() {
  return (
    <div className='w-full lg:w-full bg-tra-400 h-20 sticky lg:flex lg:justify-between lg:items-center lg:px-52 z-10'>
        <h1 className="bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block text-transparent bg-clip-text font-sora text-center text-[30px] tracking-widest font-extrabold">KRYPTO<span className='text-white'>CON</span></h1>
        <ul className='flex gap-12 lg:justify-between text-white text-[17px] font-sora invisible lg:visible tracking-widest'>
            <li>Home</li>
            <li>Cryptocurrency</li>
            <li>Marketplace</li>
        </ul>
    </div>
  )
}

export default Navbar