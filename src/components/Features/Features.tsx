import styles from './Features.module.scss'
import FlowingConversation from './elements/FlowingConversation'
import GrowingTogether from './elements/GrowingTogether'
import YourUsers from './elements/YourUsers'

export default function Features() {
  return (
    <ul className={styles.features}>
      <li>
        <GrowingTogether />
      </li>
      <li>
        <FlowingConversation />
      </li>
      <li>
        <YourUsers />
      </li>
    </ul>
  )
}
