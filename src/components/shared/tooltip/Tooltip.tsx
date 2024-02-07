import * as styles from './tooltip.module.css'
import { Text } from '../typography'
import { Button } from '../button/Button'
import { type ReactNode } from 'react'
import classNames from 'classnames'

/**
 * Tooltip
 * @param {ReactNode} children - should not include interactive elements
 * @param {string} position - supports center, left, and right
 * @param {string} text - the text to display inside of tooltip
 * @param {string} tooltipId - the unique id to be targeted by aria-describedby
 */

interface TooltipProps {
  children: ReactNode
  tooltipId: string
  text: string
  position: string
  id: string
  onClick: () => void
  width?: string
  isFavorited?: boolean
}

export const Tooltip = ({
  children,
  tooltipId,
  text,
  position,
  id,
  onClick,
  isFavorited = false,
  width = 'md'
}: TooltipProps): JSX.Element => {
  return (
    <div className={classNames(styles.tooltip, styles[width])}>
      <Button
        as='button'
        type='button'
        style='icon-only'
        id={id}
        ariaLabel={isFavorited ? 'unfavorite' : 'favorite'}
        ariaDescribedBy={tooltipId}
        onClick={onClick}
      >
        {children}
      </Button>
      <div id={tooltipId} className={styles[position]} role='tooltip'>
        <Text as='p' style='detail' weight='bold' color='icon-default'>
          {text}
        </Text>
      </div>
    </div>
  )
}
