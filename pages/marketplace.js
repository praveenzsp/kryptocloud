import NFTCard from "@/components/NFTCard"
import {Nfts} from '../data'
import Navbar from "@/components/Navbar"

function marketplace(){
    return (
        <>
        <Navbar/>
        <h1 className="text-white font-sora font-bold text-[45px] tracking-wide text-center my-10 mt-20">Hot Drops 🔥</h1>
        <div className="lg:flex justify-center items-center lg:flex-wrap">
        {
            Nfts.map(nft=>{
                return (
                    <div className="m-5 flex justify-center">
                        <NFTCard url={nft.url} title={nft.title} profile={nft.profile} artist={nft.artist} price={nft.price} />
                    </div>
                )
            })
        }
        </div>
        </>
    )
}

export default marketplace