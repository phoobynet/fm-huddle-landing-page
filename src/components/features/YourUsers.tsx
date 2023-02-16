import styles from './YourUsers.module.scss'
import yourUsers from '@/assets/images/illustration-your-users.svg'

export default function YourUsers() {
  return (
    <article className={styles.yourUsers}>
      <img
        src={yourUsers}
        alt=""
      />
      <h3>Your Users</h3>
      <p>
        It takes no time at all to integrate Huddle with your app&apos;s
        authentication solution. This means, once signed in to your app, your
        users can start chatting immediately.
      </p>
    </article>
  )
}
