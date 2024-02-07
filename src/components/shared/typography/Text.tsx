import * as styles from './typography.module.css'
import * as sharedStyles from '../../../sharedStyles.module.css'
import { type ReactNode } from 'react'
import classNames from 'classnames'

/**
 * Text
 * @param {string} style - the style name of the text element
 * @param {string} [as] - The html element needed. "div", "p", "strong", "a" and "span" supported.
 * @param {ReactNode} children - The text or fragment nested inside the element.
 * @param {string} [color] - name of color from global classes/vars
 * @param {string} [weight] - name of weight from global classes. "regular", "semibold" and "bold" supported.
 * @param {string} [href] - link url
 * @param {boolean} [linkNewTab] - if true, open link in new tab
 * TODO: add param for target blank
 */

export interface TextProps {
  children: ReactNode
  style: string
  as?: string
  color?: string
  weight?: string
  href?: string
  linkNewTab?: boolean
  className?: string
}

/**
 * Helper function to open links in new tab and eliminate window.opener vulnerabilities
 * @param {string} href
 */
export const handleNewTab = (href?: string): void => {
  if (typeof href === 'string') {
    const newWindow = window.open(href, '_blank')
    if (newWindow !== null) newWindow.opener = null
  }
}

export const Text = ({
  children,
  style,
  as,
  color = 'black',
  weight = 'regular',
  href,
  linkNewTab = false,
  className
}: TextProps): JSX.Element => {
  const optionalLinkProps: React.HTMLProps<HTMLAnchorElement> = {}
  if (linkNewTab && as === 'a') {
    optionalLinkProps.onClick = (event) => {
      event.preventDefault()
      handleNewTab(href)
    }
    optionalLinkProps.rel = 'external nofollow nooopener'
  }

  switch (as) {
    case 'p':
      return (
        <p
          className={classNames(
            styles[style],
            sharedStyles[weight],
            sharedStyles[color],
            className
          )}
        >
          {children}
        </p>
      )
    case 'span':
      return (
        <span
          className={classNames(
            styles[style],
            sharedStyles[weight],
            sharedStyles[color],
            className
          )}
        >
          {children}
        </span>
      )
    case 'strong':
      return (
        <strong
          className={classNames(
            styles[style],
            sharedStyles[weight],
            sharedStyles[color]
          )}
        >
          {children}
        </strong>
      )
    case 'a': {
      return (
        <a
          href={href}
          className={classNames(
            styles[style],
            sharedStyles[weight],
            sharedStyles[color]
          )}
          {...optionalLinkProps}
        >
          {children}
        </a>
      )
    }
    default:
      return (
        <div
          className={classNames(
            styles[style],
            sharedStyles[weight],
            sharedStyles[color]
          )}
        >
          {children}
        </div>
      )
  }
}
