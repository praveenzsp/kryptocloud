import React from 'react'
import Image from 'next/image'

function NFTCard({url, title, profile, artist, price}) {
  return (
    <div className='w-[290px] flex flex-col gap-2 bg-gradient-to-l from-gray-900 to-black rounded-xl pb-6 border-b-[0.5px] border-gray-300'>
        <img src={url}/>
        <div className='px-4'>
            <h3 className='text-white font-sora font-bold text-[20px]'>{title}</h3>
            <div className='flex gap-3 items-center'>
                <img src={profile}/>
                <p className='text-white text-[12px]'>{artist}</p>
            </div>
            <div className='flex gap-3 items-center justify-between pt-4'>
                <h3 className='text-white font-bold'>{price}</h3>
                <button className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 rounded-xl py-1 tracking-wide'>Place Bid</button>
            </div>
        </div>
    </div>
  )
}

export default NFTCard