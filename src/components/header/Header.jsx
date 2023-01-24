import './header.css'

const Header = ({ action, refreshable }) => {
  return (
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
      <button onClick={action} disabled={refreshable}>
        <img src="https://icon-library.com/images/refresh-icon-white/refresh-icon-white-1.jpg" alt="reload white icon" />
      </button>
    </header>
  )
}

export { Header }
