import type { FC, ReactNode } from 'react'
import * as sharedStyles from '../../../sharedStyles.module.css'
import * as styles from './flyout.module.css'
import { Button, type ButtonProps } from '../button/Button'
import { Icon, type IconProps } from '../icons/Icons'
import { Text } from '../typography'

interface FlyoutListItemProps {
  buttonText: string
  iconStyle: IconProps['style']
  iconProps?: Omit<Partial<IconProps>, 'style'>
  buttonProps?: Omit<Partial<ButtonProps>, 'children' | 'onClick'>
  afterButton?: ReactNode
  onClick?: () => void
  isDisabled?: boolean
}

export const FlyoutListItem: FC<FlyoutListItemProps> = (props) => {
  const {
    onClick,
    buttonProps,
    iconStyle,
    iconProps,
    buttonText,
    afterButton,
    isDisabled = false
  } = props

  return (
    <li className={sharedStyles['flyout-item']}>
      <Button
        as={buttonProps?.as ?? 'button'}
        style='icon-only'
        onClick={onClick}
        {...buttonProps}
        disabled={isDisabled}
        className={styles['flyout-list-item-btn']}
      >
        <Icon
          space='right'
          color={isDisabled ? 'disabled-check' : 'brand-red'}
          size='md'
          style={iconStyle}
          {...iconProps}
        />
        <Text
          as='span'
          style='detail'
          color={isDisabled ? 'disabled-check' : 'dark-blue'}
          weight='semibold'
        >
          {buttonText}
        </Text>
      </Button>
      {afterButton}
    </li>
  )
}
