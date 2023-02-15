import styles from './SubscribeBtn.module.scss'
import type { HTMLAttributes } from 'react'

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string
}

export default function SubscribeBtn({ label, ...args }: Props) {
  return (
    <button
      {...args}
      className={styles.subscribeBtn}
    >
      {label}
    </button>
  )
}
