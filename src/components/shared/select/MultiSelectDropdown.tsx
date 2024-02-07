// https://react-select.com/home
import { useMemo } from 'react'
import Select, { components } from 'react-select'
import classNames from 'classnames'
import * as styles from './select.module.css'
import { Label } from '../forms/form-elements'
import { VirtualizedMenuList } from './VirtualizedMenuList'
import {
  type SelectValue,
  type SelectValueValue,
  type MultiSelectProps
} from './types'
import { makeClearIndicator } from './helpers/makeClearIndicator'
import { makeDropdownIndicator } from './helpers/makeDropdownIndicator'
import { makeOption } from './helpers/makeOption'
import { makeNoOptionsMessage } from './helpers/makeNoOptionsMessage'
import { makeSingleValue } from './helpers/makeSingleValue'

export const MultiSelectDropdown = <T extends SelectValueValue = string>({
  defaultOptionSelected = false,
  isSearchable = false,
  required = false,
  name = '',
  readOnly = false,
  value,
  label,
  ariaLabel,
  className,
  onChange,
  inputLabelPrefix,
  onClear,
  screenReaderOnlyLabel = false,
  virtualize = false,
  maxMenuHeight = 250,
  noOptionsText = 'No Options',
  ...restProps
}: MultiSelectProps<T>): JSX.Element => {
  const handleChange = (selection: Array<SelectValue<T>>): void => {
    if (onChange) {
      if (Array.isArray(selection)) {
        const values: T[] = selection?.map((s) => s.value)
        onChange(values)
      }
    }

    if (onClear && selection === null) onClear()
  }

  const DropdownIndicator = useMemo(
    () => makeDropdownIndicator({ isSearchable }),
    [isSearchable]
  )
  const ClearIndicator = useMemo(
    () => makeClearIndicator({ name, isSearchable }),
    [isSearchable, name]
  )
  const NoOptionsMessage = useMemo(
    () => makeNoOptionsMessage({ noOptionsText }),
    [noOptionsText]
  )
  const SingleValue = useMemo(
    () => makeSingleValue({ inputLabelPrefix }),
    [inputLabelPrefix]
  )
  const Option = useMemo(() => makeOption(), [])

  return (
    <>
      {label && (
        <Label
          inputId={name}
          inputIsRequired={required}
          screenReaderOnly={screenReaderOnlyLabel}
        >
          {label}
        </Label>
      )}
      <Select
        {...restProps}
        defaultValue={value}
        components={{
          DropdownIndicator,
          ClearIndicator,
          NoOptionsMessage,
          SingleValue,
          Option,
          MenuList: virtualize ? VirtualizedMenuList : components.MenuList
        }}
        className={classNames(
          styles.select,
          isSearchable ? styles.search : '',
          className
        )}
        isMulti
        aria-label={ariaLabel}
        onChange={(v) => {
          handleChange(v as Array<SelectValue<T>>)
        }}
        unstyled
        styles={{
          control: (base, state) => ({
            ...base,
            outline: 'inherit',
            '&:focus-within': {
              outline: '-webkit-focus-ring-color auto 1px',
              'box-shadow': '0 0 1rem 0 rgba(9, 55, 124, 0.5)'
            }
          }),
          option: (base, props) => ({
            ...base,
            ...(props.isFocused && {
              outline: '-webkit-focus-ring-color auto 1px'
            })
          })
        }}
        isSearchable={isSearchable}
        classNamePrefix='react-select'
        isClearable={isSearchable}
        name={name}
        isDisabled={readOnly || restProps.isDisabled}
        maxMenuHeight={maxMenuHeight}
        value={value}
        // menuIsOpen // helpful for testing styles
      />
    </>
  )
}
