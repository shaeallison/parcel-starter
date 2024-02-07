import * as styles from './button.module.css'
import classNames from 'classnames'
import { type ForwardedRef, forwardRef, type ReactNode } from 'react'
import { handleNewTab } from '../typography/Text'

/**
 * Button
 * @param {string} style - The type of the button, currently supports "primary", "secondary", "icon-only", "link" and "function".
 * @param {string} [type] - supports button, submit and reset
 * @param {string} [href] - string for href property
 * @param {boolean} [disabled] - supports button, submit and reset
 * @param {string} [ariaLabel] - string for labeling element, most common
 * @param {string} [ariaDescribedBy] - string with longer description of element, ex tooltip content
 * @param {string} [as] - The html element needed. "button", "div" and "a" supported.
 * @param {ReactNode} children - The text or fragment nested inside the element.
 */

export interface ButtonProps {
  children: ReactNode
  style: string
  type?: 'button' | 'submit' | 'reset'
  as: string
  id?: string
  href?: string
  linkNewTab?: boolean
  ariaLabel?: string
  ariaDescribedBy?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void | Promise<void>
  className?: string
  title?: string
}

export const Button = forwardRef(function Button(props: ButtonProps, ref) {
  const {
    children,
    style,
    type,
    as,
    href,
    linkNewTab = false,
    ariaLabel,
    ariaDescribedBy,
    disabled,
    onClick,
    className,
    id,
    title
  } = props
  const classes = classNames(`${styles[style] as string}`, className)

  const externalLinkProps: React.HTMLProps<HTMLAnchorElement> = {}
  if (linkNewTab) {
    externalLinkProps.onClick = (event) => {
      event.preventDefault()
      handleNewTab(href)
    }
    externalLinkProps.rel = 'external nofollow nooopener'
  }

  switch (as) {
    case 'button':
      return (
        <button
          type={type}
          disabled={disabled}
          className={classes}
          aria-label={ariaLabel ?? ''}
          aria-describedby={ariaDescribedBy ?? ''}
          {...(disabled ? { 'aria-disabled': true } : {})}
          onClick={disabled ? undefined : onClick}
          id={id}
          ref={ref as ForwardedRef<HTMLButtonElement>}
          title={title}
        >
          {children}
        </button>
      )
    case 'a': {
      return (
        <a
          href={href}
          aria-label={ariaLabel ?? ''}
          aria-describedby={ariaDescribedBy ?? ''}
          className={classes}
          onClick={onClick}
          {...externalLinkProps}
          id={id}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
        >
          {children}
        </a>
      )
    }
    default:
      // TODO: remove this case if not needed, we shouldn't have an interactive component using a div
      return (
        <div
          className={classes}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy ?? ''}
          id={id}
          ref={ref as ForwardedRef<HTMLDivElement>}
        >
          {children}
        </div>
      )
  }
})
