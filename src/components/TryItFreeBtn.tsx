import styles from './TryItFreeBtn.module.scss'
import type { MouseEventHandler } from 'react'

interface Props {
  clickHandler: MouseEventHandler<HTMLButtonElement>
  label: string
}

export default function TryItFreeBtn({ clickHandler, label }: Props) {
  return (
    <button
      onClick={clickHandler}
      className={styles.tryItFreeBtn}
    >
      {label}
    </button>
  )
}
