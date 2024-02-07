import * as styles from './icons.module.css'
import * as sharedStyles from '../../../sharedStyles.module.css'
import classNames from 'classnames'
import * as animationStyles from '../../../animation.module.css'

/**
 * Icons
 * @param {string} style - icon class, see css file for variations
 * @param {string} size - icon size, currently supports xs, sm, md and lg (see if we can manage w/o custom rems)
 * @param {string} color - icon color from global colors defined in base.css
 * @param {string} [space] - add default spacing to left or right or both ("center") sides of icon
 * @param {boolean} [rotate] - rotate animation for down/up arrows
 */

export interface IconProps {
  /** testing */
  style: string
  color: string
  size: string
  space?: 'left' | 'right' | 'center'
  rotate?: boolean
  animation?: 'spin' | 'flip'
}

export const Icon: React.FC<IconProps> = (props): JSX.Element => {
  const {
    style,
    color,
    size,
    space = 'none',
    rotate = false,
    animation
  } = props
  return (
    <span
      className={classNames(
        styles.icon,
        styles[style],
        sharedStyles[color],
        styles[size],
        styles[space],
        rotate ? styles.open : styles.closed,
        typeof animation === 'string' && animationStyles[animation],
        typeof animation === 'string' && space !== 'none' && styles.animated
      )}
      aria-hidden
    ></span>
  )
}
