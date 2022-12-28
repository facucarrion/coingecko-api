import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import BasicTable from './components/BasicTable'import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data)
      setCoins(res.data)
    })
  }, [])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setCoins(res.data)
    })
  }, [])
  
  
  return (
    <div className="App">
      {
        // coins.map(coin => (
        //   <h3 key={coin.id}>{coin.name}</h3>
        // ))
      }
      <BasicTable coins={coins} />
    </div>
  )
}

export default App
