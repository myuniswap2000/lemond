import { Link, withTranslation } from '../i18n'
import styles from '../styles/layout.less'

const Footer = ({ t }) => {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href="/"><li><i className={styles.lemond}></i></li></Link>
                <li onClick={() => window.open("https://twitter.com/LemondFinance")}><i className={styles.twitter}></i></li>
                <Link href="/"><li><i className={styles.telegram}></i></li></Link>
                <Link href="/"><li><i className={styles.github}></i></li></Link>
            </ul>
        </footer>
    )
}

export default withTranslation('header')(Footer)