import { components } from 'react-select'
import { type SelectProps } from '../types'
import { Icon } from '../../icons/Icons'

type CustomClearIndicatorProps = Pick<SelectProps, 'name' | 'isSearchable'>
type CI = (typeof components)['ClearIndicator']

export const makeClearIndicator = function ClearIndicatorWrapper({
  name,
  isSearchable
}: CustomClearIndicatorProps): CI {
  const ClearIndicator: CI = ({ innerProps, ...props }) => {
    return (
      <components.ClearIndicator
        innerProps={{
          'aria-label': `Clear ${name ?? ''}`,
          ...innerProps
        }}
        {...props}
      >
        {isSearchable && <ClearIcon />}
      </components.ClearIndicator>
    ) as JSX.Element
  }
  return ClearIndicator
}

export const ClearIcon = (): JSX.Element => {
  return <Icon style='icon-input-clear' color='grey-8' size='md' />
}
