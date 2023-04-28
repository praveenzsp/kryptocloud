import NFTCard from "@/components/NFTCard"
import {Nfts} from '../data'
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"

function Marketplace(){
    return (
        <>
        <Navbar/>
        <h1 className="text-white font-sora font-bold text-[45px] tracking-wide text-center my-10 mt-20">Hot Drops 🔥</h1>
        <div className="lg:flex justify-center items-center lg:flex-wrap mb-56">
        {
            Nfts.map(nft=>{
                return (
                    <motion.div className="m-5 flex justify-center" key={nft.id} initial={{opacity:0,y:'5vw'}} whileInView={{opacity:1,y:0}}
                    viewport={{once:true,amount:1}}
                    transition={{type:'spring',duration:1.5}}
                    >
                        <NFTCard url={nft.url} title={nft.title} profile={nft.profile} artist={nft.artist} price={nft.price} />
                    </motion.div>
                )
            })
        }
        </div>
        </>
    )
}

export default Marketplace