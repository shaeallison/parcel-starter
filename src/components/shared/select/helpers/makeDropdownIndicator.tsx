import { components } from 'react-select'
import { type SelectProps } from '../types'
import { Icon } from '../../icons/Icons'

type CustomDropdownIndicatorProps = Pick<SelectProps, 'isSearchable'>
type DI = (typeof components)['DropdownIndicator']

export const makeDropdownIndicator = function DropdownIndicatorWrapper({
  isSearchable
}: CustomDropdownIndicatorProps): DI {
  const DropdownIndicator: DI = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {isSearchable ? <SearchIcon /> : <CaretDownIcon />}
      </components.DropdownIndicator>
    )
  }
  return DropdownIndicator
}

const CaretDownIcon = (): JSX.Element => {
  return <Icon style='icon-select-arrow' color='grey-8' size='sm' />
}
const SearchIcon = (): JSX.Element => {
  return <Icon style='icon-search' color='grey-8' size='md' />
}
