import React from 'react'
import { motion } from 'framer-motion'

function CurrencyCard({ name, symbol, image, current_price, market_cap, price_change_percentage_24h}) {
  return (
    <motion.div
        initial={{x:'-2vw',opacity:0}}
        whileInView={{x:0,opacity:1}}
        viewport={{once:true,amount:1}}
        transition={{type:'spring',duration:1.5}}
    >
        <div className='w-full min-h-[80px] bg-black rounded-2xl border-[2px] border-gray-500 flex justify-between items-center'>
            <div className='flex items-center'>
                <img src={image} className='w-[50px] h-[50px] mx-6'/>
                <div>
                    <h3 className='text-white font-sora font-bold text-[20px]'>{name} ({symbol.toUpperCase()})</h3>
                    <h3 className='text-white'>${market_cap}</h3>
                </div>
            </div>

            <div className='mx-6'>
                <p className='font-bold text-white text-[20px] font-sora'>${current_price}</p>
                {
                    (price_change_percentage_24h>=0) ?
                    <p className='font-sora text-green-500'>{price_change_percentage_24h}%</p>
                    :
                    <p className='font-sora text-red-500'>{price_change_percentage_24h}%</p>
                }
            </div>
        </div>
    </motion.div>
  )
}

export default CurrencyCard