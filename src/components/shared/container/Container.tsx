import * as styles from './container.module.css'
import { type ReactNode } from 'react'

/**
 * Container
 * @param {ReactNode} children - components/content inside of container
 */

export const Container = ({
  children
}: {
  children: ReactNode
}): JSX.Element => {
  return <div className={styles.container}>{children}</div>
}
