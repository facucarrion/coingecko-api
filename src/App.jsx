import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import BasicTable from './components/BasicTable'

const App = () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const [coins, setCoins] = useState([])
  const [refreshable, setRefreshable] = useState(false)

  const refreshQuery = (url) => {
    axios.get(url).then((res) => {
      setCoins(res.data)
    })
    setRefreshable(true)
    setTimeout(() => setRefreshable(false), 8000)
  }

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data)
    })
  }, [])

  return (
    <div className="App">
      <header>
        <h1 className="title">
          Crypto Prices
          <span>
            Powered by
            <img
              src="https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png"
              alt=""
            />
          </span>
        </h1>
        <button onClick={() => refreshQuery(url)} disabled={refreshable}>
          <img src="https://icon-library.com/images/refresh-icon-white/refresh-icon-white-1.jpg" alt="reload white icon" />
        </button>
      </header>

      <BasicTable coins={coins} />
    </div>
  )
}

export default App
