import headerLogo from './images/logoheader.png'

import styles from './Header.module.scss'

import { Link } from 'react-router-dom'

const Header = () => {
    return <header>
        <Link to="/">
            <figure>
                <img className={styles.logo} src={headerLogo} alt="AllFlicks logo" />
            </figure>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to="/watchlist">
                        My Watchlist
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header