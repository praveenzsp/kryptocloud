import CurrencyCard from "@/components/CurrencyCard";
import Navbar from "@/components/Navbar";
import { currencyData } from "@/data";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [searchCurrencyData, setSearchCurrencyData] = useState(search===''? currencyData : []);

  const handleSearch=(e)=>{
      console.log(search)
    setSearch(e.target.value)
    if(search==''){
        setSearchCurrencyData(currencyData)
    }else{
        let x=[]
        currencyData.filter(coin=>{
            if(coin.name.toLowerCase().startsWith(search.toLowerCase())){
                x.push(coin)
            }
        })
        setSearchCurrencyData(x) 
    }
  }
  
  return (
    <div className="mt-20">
      <Navbar />

      <div className="flex flex-col items-center">
        <h1 className="font-sora font-extrabold lg:text-5xl text-3xl text-center lg:py-10 text-white">
          Popular Cryptocurrencies
        </h1>
        <input
          className="text-left lg:w-[500px] w-[250px] h-[50px] rounded-3xl bg-gray-900 border-[1px] border-gray-400 pl-4 text-white mx-3 my-6"
          placeholder="search a currency"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>

      <div className="my-6 lg:mx-52">
        {searchCurrencyData.map((coin) => {
          return (
            <div className="my-6 mx-3 lg:mx-0" key={coin.id}>
              <CurrencyCard
                name={coin.name}
                symbol={coin.symbol}
                image={coin.image}
                current_price={coin.current_price}
                market_cap={coin.market_cap}
                price_change_percentage_24h={coin.price_change_percentage_24h}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;

// export async function getStaticProps(){
//     const response=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
//     const data=await response.json()
//     return {
//         props:{
//             currencyData:data
//         },
//         revalidate:15000
//     }
// }
