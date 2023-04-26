import React from 'react'

function CurrencyCard() {
  return (
    <div>
        <div className='w-full h-[80px] bg-black rounded-2xl border-[2px] border-gray-500 flex justify-between items-center'>
            <div className='flex items-center'>
                <img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' className='w-[50px] h-[50px] mx-6'/>
                <div>
                    <h3 className='text-white font-sora font-bold text-[20px]'>Bitcoin (BTC)</h3>
                    <h3 className='text-white'>$25,844,175,512</h3>
                </div>
            </div>

            <div className='mx-6'>
                <p className='font-bold text-white text-[20px] font-sora'>$29696</p>
                <p className='font-sora text-green-500'>8.74%</p>
            </div>
        </div>
    </div>
  )
}

export default CurrencyCard