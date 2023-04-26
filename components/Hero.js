import React from 'react'

function Hero() {
  return (
    <div className='flex lg:flex-row flex-col-reverse items-center lg:justify-between lg:px-52 lg:mt-20 my-10'>

        <div className='w-full lg:w-1/2 px-6 lg:px-0 text-center lg:text-left'>
            <h1 className='text-white font-sora font-extrabold lg:text-6xl text-4xl py-6 lg:tracking-wide'>Discover, Collect & Mint Rare NFTs</h1>

            <p className='text-gray-400 font-sora  text-lg lg:tracking-wide'>Empowers traders, liquidity providers & developers to participate in an open financial marketplace with no barriers to entry.</p>

            <div className='my-6 flex lg:flex-row flex-col gap-10'>
                <button className="px-10 py-2 text-purple-100 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">Explore</button>
                <button className="px-10 py-2 text-purple-100 rounded-xl  border-[2px] border-gradient-to-r from-violet-500 to-fuchsia-500">How it works?</button>
                
            </div>
        </div>

        <div className='lg:w-1/2 w-full text-center px-6 lg:px-0'>
            <img src='https://nft-29rm65xpk-namyakhan.vercel.app/images/hero.svg' className='lg:w-[400px] w-[350px] lg:ml-32'/>
        </div>
    </div>
  )
}

export default Hero