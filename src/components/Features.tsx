import styles from './Features.module.scss'
import FlowingConversation from '@/components/features/FlowingConversation'
import GrowingTogether from '@/components/features/GrowingTogether'
import YourUsers from '@/components/features/YourUsers'

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
