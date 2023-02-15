import styles from './App.module.scss'
import Hero from '@/components/Hero'
import Logo from '@/components/images/Logo'
import TryItFreeBtn from '@/components/interactive/TryItFreeBtn'

export default function App() {
  return (
    <div className={styles.app}>
      <section className={styles.heading}>
        <Logo />
        <TryItFreeBtn label="Try It Free" />
      </section>
      <section className={styles.hero}>
        <Hero />
      </section>
      <section className={styles.stats}>
        <div>stats</div>
      </section>
      <section className={styles.features}>
        <div>features</div>
      </section>
      <section className={styles.callToAction}>
        <div>callToAction</div>
      </section>
      <section className={styles.footer}>
        <div>footer</div>
      </section>
    </div>
  )
}
