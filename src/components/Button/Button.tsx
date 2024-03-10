import { ReactNode, useState } from 'react'
import * as styles from './Button.module.scss'

type ButtonProps = {
  children: ReactNode
  id: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(false)
  const { children, id } = props

  return (
    <>
      <button
        id={id}
        className={styles.button}
        onClick={() => setClicked(!clicked)}
      >
        {children}
      </button>
      <p className={styles.message}>
        {clicked ? 'Thanks for Clicking!' : 'Try Clicking..'}
      </p>
    </>
  )
}
