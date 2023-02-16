import styles from './FlowingConversation.module.scss'
import flowingConversation from '@/assets/images/illustration-flowing-conversation.svg'

export default function FlowingConversation() {
  return (
    <div className={styles.flowingConversation}>
      <article className={styles.flowingConversation}>
        <img
          src={flowingConversation}
          alt=""
        />
        <h3>Flowing Conversations</h3>
        <p>
          You wouldn&apos;t paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </article>
    </div>
  )
}
