import CurrencyCard from "@/components/CurrencyCard"
import Navbar from "@/components/Navbar"
import Searchbar from "@/components/Searchbar"

function search(){
    return (
        <>
        <Navbar/>
        <Searchbar/>
        <CurrencyCard/>
        </>
    )
}

export default search

// export async function getStaticProps(){
//     const response=await fetch('')
//     const data=await response.json()
//     return {
//         props:{
//             currencyData:data
//         },
//         revalidate:2
//     }
// }