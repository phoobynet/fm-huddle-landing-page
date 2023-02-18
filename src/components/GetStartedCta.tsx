import styles from './GetStartedCta.module.scss'
import CallToActionBtn from '@/components/interactive/CallToActionBtn'

export default function GetStartedCta() {
  return (
    <div className={styles.getStartedCta}>
      <h1>Ready To Build Your Community?</h1>
      <CallToActionBtn label="Get Started For Free" />
    </div>
  )
}
