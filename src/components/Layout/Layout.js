import Header from './Header/Header'
import Footer from './Footer/Footer'

import styles from './Layout.module.scss'

const Layout = props => {
    return <>
        <Header />
        <main className={styles.layout}>{props.children}</main>
        <Footer />
    </>
}

export default Layout