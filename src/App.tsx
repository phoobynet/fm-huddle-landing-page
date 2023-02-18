import styles from './App.module.scss'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import GetStartedCta from '@/components/GetStartedCta'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
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
        <Stats />
      </section>
      <section className={styles.features}>
        <Features />
      </section>
      <section className={styles.callToAction}>
        <GetStartedCta />
      </section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  )
}
