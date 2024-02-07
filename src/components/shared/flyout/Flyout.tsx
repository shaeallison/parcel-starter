import * as styles from './flyout.module.css'
import { type ReactNode, useRef, useLayoutEffect, type FC } from 'react'
import classNames from 'classnames'

interface FlyoutProps {
  /** account or default are the current variations */
  type?: string
  /** flyout menu items */
  children: ReactNode
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  width: 'md' | 'lg'
}

export const Flyout: FC<FlyoutProps> = (props) => {
  const { type = 'default', children, isOpen, setIsOpen, width } = props
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickAway)
      })
    } else {
      document.removeEventListener('click', handleClickAway)
    }

    return () => {
      document.removeEventListener('click', handleClickAway)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleClickAway = (e: MouseEvent): void => {
    const target = e.target as HTMLElement
    if (
      ref?.current === document.activeElement &&
      ref?.current?.contains(target)
    )
      return
    setIsOpen(false)
  }

  return (
    <div
      className={classNames(
        styles.flyout,
        styles[type],
        isOpen ? (styles.open as string) : (styles.closed as string),
        width === 'md' ? (styles.md as string) : (styles.lg as string)
      )}
      aria-expanded={isOpen}
      ref={ref}
    >
      {children}
    </div>
  )
}
