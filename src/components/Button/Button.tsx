import { ReactNode } from 'react'
import * as styles from './Button.module.scss'

type ButtonProps = {
  children: ReactNode
  id: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, id } = props
  return (
    <button id={id} className={styles.button}>
      {children}
    </button>
  )
}
