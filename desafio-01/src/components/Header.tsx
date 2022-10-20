import styles from './Header.module.css'
import logoTipo from '../assets/rocket-logo.svg'

export function Header() {

    return (
        <header className={styles.header}>
            <img src={logoTipo} alt="Logotipo" />
            <strong className={styles.logoTipoBlue}>to<span className={styles.logoTipoPurpleDark}>do</span></strong>
        </header>
    )

}