import React from 'react'

function Searchbar() {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='font-sora font-extrabold text-5xl text-center lg:py-10 text-white'>Popular Cryptocurrencies</h1>
        <input className='text-left w-[500px] h-[50px] rounded-3xl bg-gray-900 border-[1px] border-gray-400 pl-4 text-white' placeholder='search cryptocurrency' />
    </div>
  )
}

export default Searchbar