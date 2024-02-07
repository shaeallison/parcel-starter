import { components } from 'react-select'

type O = (typeof components)['Option']

export const makeOption = function OptionWrapper(): O {
  const Option: O = ({ children, innerProps, ...props }) => {
    return (
      <components.Option
        innerProps={{ ...innerProps, role: 'option' }}
        {...props}
      >
        {children}
      </components.Option>
    )
  }
  return Option
}
