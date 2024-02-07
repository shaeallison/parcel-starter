import * as styles from './avatar.module.css'
import classNames from 'classnames'

/**
 * Avatar
 * @param {string} initials - The users initials.
 * @param {string} size - Size supports "sm" and "md".
 */

export const Avatar = ({
  initials,
  size
}: {
  initials: string
  size: 'sm' | 'md'
}): JSX.Element => {
  return (
    <div className={classNames(styles.avatar, styles[size])}>{initials}</div>
  )
}
