import styles from './header.module.scss'
import logo from '../../assets/images/logo.png'
export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo}></img>
        <strong>Ignite feed</strong>
      </header>
    </>
  )
}