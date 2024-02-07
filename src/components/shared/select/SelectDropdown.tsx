// https://react-select.com/home
import { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import * as styles from './select.module.css'
import * as sharedStyles from '../../../sharedStyles.module.css'

import Select from 'react-select'
import {
  type SelectValue,
  type SelectProps,
  type SelectValueValue
} from './types'
import { makeClearIndicator } from './helpers/makeClearIndicator'
import { makeDropdownIndicator } from './helpers/makeDropdownIndicator'
import { makeOption } from './helpers/makeOption'
import { makeNoOptionsMessage } from './helpers/makeNoOptionsMessage'
import { makeSingleValue } from './helpers/makeSingleValue'

export const SelectDropdown = <T extends SelectValueValue = string>({
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
  maxMenuHeight = 250,
  noOptionsText = 'No Options',
  ...restProps
}: SelectProps<T>): JSX.Element => {
  const handleChange = (selection: SelectValue<T>): void => {
    if (onChange) onChange(selection?.value ?? null)

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
        <label
          htmlFor={name}
          className={classNames(
            sharedStyles.label,
            required ? sharedStyles.required : '',
            screenReaderOnlyLabel && sharedStyles['u-sr-only']
          )}
        >
          {label}
        </label>
      )}
      <Select
        {...restProps}
        defaultValue={value}
        components={{
          DropdownIndicator,
          ClearIndicator,
          NoOptionsMessage,
          SingleValue,
          Option
        }}
        className={classNames(
          styles.select,
          isSearchable ? styles.search : '',
          className
        )}
        isMulti={false}
        aria-label={ariaLabel}
        onChange={(v) => {
          handleChange(v as SelectValue<T>)
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

export type SelectFieldProps<T extends SelectValueValue = string> =
  SelectProps<T> & {
    hasError?: boolean
    touched?: boolean
  }

export const SelectDropdownField = <T extends SelectValueValue = string>({
  name = '',
  value = undefined,
  hasError = false,
  touched = false,
  required = false,
  onChange,
  maxMenuHeight = 250,
  noOptionsText = 'No Options',
  ...restProps
}: SelectFieldProps<T>): JSX.Element => {
  const [selectValue, setSelectValue] = useState<
    SelectValue<T> | undefined | null
  >(value)

  useEffect(() => {
    if (value != null) void setSelectValue(value.value)
  }, [setSelectValue, selectValue])

  const handleChange: SelectProps<T>['onChange'] = (e) => {
    if (e != null) void setSelectValue(e)
    if (typeof onChange === 'function' && e !== null) onChange(e)
  }

  return (
    <>
      <SelectDropdown<T>
        {...restProps}
        required={required}
        value={value}
        className={hasError && touched ? styles.error : ''}
        onChange={handleChange}
        name={name}
        maxMenuHeight={maxMenuHeight}
        noOptionsText={noOptionsText}
      />
    </>
  )
}
