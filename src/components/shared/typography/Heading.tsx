import * as styles from './typography.module.css'
import * as sharedStyles from '../../../sharedStyles.module.css'
import { type ReactNode } from 'react'
import classNames from 'classnames'

interface HeadingProps {
  children: ReactNode
  level: 'one' | 'two' | 'three' | 'four'
  as: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'p' | 'div'>
  color?: string
}

export const Heading = ({
  children,
  level,
  as = 'div',
  color = 'black'
}: HeadingProps): JSX.Element => {
  const Component = as
  return (
    <Component className={classNames(styles[level], sharedStyles[color])}>
      {children}
    </Component>
  )
}
