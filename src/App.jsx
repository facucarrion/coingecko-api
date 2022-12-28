import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import BasicTable from './components/BasicTable'

function App() {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

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
      <button onClick={() => refreshQuery(url)} disabled={refreshable}>
        Recargar
      </button>
      <BasicTable coins={coins} />
    </div>
  )
}

export default App
