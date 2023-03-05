import { BasicTable } from './components/table/BasicTable'
import { Header } from './components/header/Header'
import { useCoingeckoFetch } from './hooks/useCoingeckoFetch'
import { API_URL } from './assets/constants'

const App = () => {
  const { coins, setCoins, refresh, setRefresh } = useCoingeckoFetch(API_URL)

  const refreshQuery = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCoins(data))
    setRefresh(true)
    setTimeout(() => setRefresh(false), 8000)
  }

  return (
    <>
      <Header
        action={() => refreshQuery(API_URL)}
        refresh={refresh}
      />
      <BasicTable coins={coins} />
    </>
  )
}

export { App }
