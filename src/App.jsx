import BasicTable from './components/BasicTable'
import { useEffect, useState } from 'react'
import { Header } from './components/header/Header'
import axios from 'axios'

const App = () => {
  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const [coins, setCoins] = useState([])
  const [refreshable, setRefreshable] = useState(false)

  const refreshQuery = (url) => {
    axios.get(url).then((res) => setCoins(res.data))
    setRefreshable(true)
    setTimeout(() => setRefreshable(false), 8000)
  }

  useEffect(() => {
    axios.get(URL).then((res) => {
      setCoins(res.data)
    })
  }, [])

  return (
    <>
      <Header action={() => refreshQuery(URL)} refreshable={refreshable} />
      <BasicTable coins={coins} />
    </>
  )
}

export default App
