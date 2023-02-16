import styles from './GrowingTogether.module.scss'
import growingTogether from '@/assets/images/illustration-grow-together.svg'

export default function GrowingTogether() {
  return (
    <article className={styles.growingTogether}>
      <img
        src={growingTogether}
        alt=""
      />
      <h3>Grow Together</h3>
      <p>
        Generate meaningful discussions with your audience and build a strong,
        loyal community. Think of the insightful conversations you miss out on
        with a feedback form.
      </p>
    </article>
  )
}
