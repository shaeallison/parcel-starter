import * as styles from './typography.module.css'
import * as sharedStyles from '../../../sharedStyles.module.css'
import { type ReactNode } from 'react'
import classNames from 'classnames'

interface HeadingProps {
  children: ReactNode
  type?: 'unordered' | 'ordered'
  color?: string
}

export const List = ({
  children,
  type = 'unordered',
  color = 'black'
}: HeadingProps): JSX.Element => {
  const Component = type === 'unordered' ? 'ul' : 'ol'
  return (
    <Component
      className={classNames(sharedStyles[color], styles.list, styles[type])}
    >
      {children}
    </Component>
  )
}
