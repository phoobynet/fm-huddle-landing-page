import styles from './Features.module.scss'
import flowingConversation from '@/assets/images/illustration-flowing-conversation.svg'
import growingTogether from '@/assets/images/illustration-grow-together.svg'
import yourUsers from '@/assets/images/illustration-your-users.svg'

export default function Features() {
  return (
    <ul className={styles.features}>
      <li>
        <article className={styles.growingTogether}>
          <img
            src={growingTogether}
            alt=""
          />
          <h3>Grow Together</h3>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </article>
      </li>
      <li>
        <article className={styles.flowingConversation}>
          <img
            src={flowingConversation}
            alt=""
          />
          <h3>Flowing Conversations</h3>
          <p>
            You wouldn&apos;t paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </article>
      </li>
      <li>
        <article className={styles.yourUsers}>
          <img
            src={yourUsers}
            alt=""
          />
          <h3>Your Users</h3>
          <p>
            It takes no time at all to integrate Huddle with your app&apos;s
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </article>
      </li>
    </ul>
  )
}
