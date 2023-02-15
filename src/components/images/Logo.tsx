import styles from './Logo.module.scss'
import logo from '@/assets/images/logo.svg'

export default function Logo() {
  return (
    <img
      src={logo}
      alt="logo"
      className={styles.logo}
    />
  )
}
