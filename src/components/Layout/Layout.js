import { FavContextProvider } from '../../store/fav-context'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import styles from './Layout.module.scss'

const Layout = props => {
    return <FavContextProvider>
        <Header />
        <main className={styles.layout}>{props.children}</main>
        <Footer />
    </FavContextProvider>
}

export default Layout