import { Icon } from '../icons/Icons'
import * as styles from './alert.module.css'
import { Button } from '../button/Button'
import { type ReactNode } from 'react'
import classNames from 'classnames'

/**
 * Alert
 * @param {ReactNode} children - support for text and hyperlinks
 * @param {string} type - error, alert, success, and info currently supported
 */
export const Alert = ({
  children,
  type = 'error',
  dismissable = false,
  id,
  size = 'md'
}: {
  children: ReactNode
  type: 'info' | 'alert' | 'success' | 'error'
  dismissable?: boolean
  id: string
  size?: 'sm' | 'md'
}): JSX.Element => {
  return (
    <div className={classNames(styles.container, styles[type], styles[size])}>
      <div className={styles.content}>
        <Icon
          style={
            type === 'info'
              ? 'icon-info'
              : type === 'alert'
                ? 'icon-warning'
                : type === 'success'
                  ? 'icon-check-outlined'
                  : 'icon-alert'
          }
          color={
            type === 'info'
              ? 'bright-blue'
              : type === 'alert'
                ? 'icon-warn'
                : type === 'success'
                  ? 'icon-check-outlined'
                  : 'brand-red'
          }
          size={size === 'sm' ? 'md' : 'xl'}
        />
        <div className={styles.text}>{children}</div>
      </div>
      {dismissable ? (
        <Button
          as='button'
          type='button'
          id={id}
          style='icon-only'
          ariaLabel='close'
          // onClick={} TODO: once we have an alert needed in a user story
        >
          <Icon
            style='icon-close'
            color={
              type === 'info'
                ? 'bright-blue'
                : type === 'alert'
                  ? 'icon-warn'
                  : type === 'success'
                    ? 'icon-check-outlined'
                    : 'brand-red'
            }
            size='lg'
          />
        </Button>
      ) : (
        ''
      )}
    </div>
  )
}
