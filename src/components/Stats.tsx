import styles from './Stats.module.scss'
import communities from '@/assets/images/icon-communities.svg'
import messages from '@/assets/images/icon-messages.svg'

export default function Stats() {
  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <img
          src={communities}
          alt="communities"
        />
        <h2>1.4k+</h2>
        <p>Communities Formed</p>
      </div>
      <div className={styles.stat}>
        <img
          src={messages}
          alt="messages"
        />
        <h2>2.7m+</h2>
        <p>Messages Sent</p>
      </div>
    </div>
  )
}
