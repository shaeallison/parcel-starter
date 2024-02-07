import { components } from 'react-select'
import { type SelectProps } from '../types'

type CustomSingleValueProps = Pick<SelectProps, 'inputLabelPrefix'>
type NOM = (typeof components)['SingleValue']

export const makeSingleValue = function SingleValueWrapper({
  inputLabelPrefix
}: CustomSingleValueProps): NOM {
  if (!inputLabelPrefix) return components.SingleValue

  const SingleValue: NOM = ({ children, ...props }) => {
    return (
      <components.SingleValue {...props}>
        {inputLabelPrefix} {children}
      </components.SingleValue>
    )
  }
  return SingleValue
}
