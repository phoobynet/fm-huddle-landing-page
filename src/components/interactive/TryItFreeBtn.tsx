import styles from './TryItFreeBtn.module.scss'
import type { HTMLAttributes } from 'react'

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string
}

export default function TryItFreeBtn({ label, ...args }: Props) {
  return (
    <button
      className={styles.tryItFreeBtn}
      {...args}
    >
      {label}
    </button>
  )
}
