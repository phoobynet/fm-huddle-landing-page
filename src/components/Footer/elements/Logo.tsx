import styles from './Logo.module.scss'
import logoFooter from '@/assets/images/logo-footer.svg'

export default function Logo() {
  return (
    <img
      src={logoFooter}
      alt="logo"
      className={styles.logo}
    />
  )
}
