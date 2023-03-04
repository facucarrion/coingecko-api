import './header.css'
import { refreshImg, coingeckoLogoPath } from '../../assets/imagePaths'

const Header = ({ action, refresh }) => {
  return (
    <header>
      <h1 className='title'>
        Crypto Prices
        <span>
          Powered by
          <img
            src={coingeckoLogoPath}
            alt='coingecko logo'
          />
        </span>
      </h1>

      <button
        onClick={action}
        disabled={refresh}
      >
        <img
          src={refreshImg}
          alt='reload white icon'
        />
      </button>
    </header>
  )
}

export { Header }
