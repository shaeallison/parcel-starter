import { components } from 'react-select'
import { type SelectProps } from '../types'

type CustomNoOptionsMessageProps = Pick<SelectProps, 'noOptionsText'>
type NOM = (typeof components)['NoOptionsMessage']

export const makeNoOptionsMessage = function NoOptionsMessageWrapper({
  noOptionsText
}: CustomNoOptionsMessageProps): NOM {
  const NoOptionsMessage: NOM = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        {noOptionsText}
      </components.NoOptionsMessage>
    )
  }
  return NoOptionsMessage
}
