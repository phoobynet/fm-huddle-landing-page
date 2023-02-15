import styles from './Hero.module.scss'
import CallToActionBtn from '@/components/interactive/CallToActionBtn'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <div className={styles.callToAction}>
        <CallToActionBtn label="Get Started For Free" />
      </div>
    </div>
  )
}
