import styles from './CallToActionBtn.module.scss'
import type { HTMLAttributes } from 'react'

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string
}

export default function CallToActionBtn({ label, ...args }: Props) {
  return (
    <button
      {...args}
      className={styles.callToActionBtn}
    >
      {label}
    </button>
  )
}
