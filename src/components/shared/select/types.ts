import { type Props as ReactSelectProps } from 'react-select'

export type SelectValueValue = string | number | boolean

export interface SelectValue<T extends SelectValueValue = string> {
  value: T
  label: string
}

type SelectLabel =
  | {
      ariaLabel: string
      label?: string
    }
  | {
      label: string
      ariaLabel?: string
    }

interface SharedCustomSelectProps<T extends SelectValueValue> {
  className?: string
  options: Array<SelectValue<T>>
  defaultOptionSelected?: boolean
  isSearchable?: boolean
  placeholder?: string
  required?: boolean
  id?: string
  name?: string
  readOnly?: boolean
  hasError?: boolean
  screenReaderOnlyLabel?: boolean
  inputLabelPrefix?: string
  onClear?: () => void
  maxMenuHeight?: number
  touched?: boolean
  noOptionsText?: string
  virtualize?: boolean
}

type PartialReactSelectProps<
  T extends SelectValueValue = string,
  M extends boolean = false
> = Pick<
  ReactSelectProps<T, M>,
  'inputValue' | 'isLoading' | 'loadingMessage' | 'onInputChange' | 'isDisabled'
>

export type SelectProps<T extends SelectValueValue = string> =
  PartialReactSelectProps<T> &
    SelectLabel &
    SharedCustomSelectProps<T> & {
      onChange?: (value: T) => void
      value?: SelectValue<T> | undefined | null
    }

export type MultiSelectProps<T extends SelectValueValue = string> =
  PartialReactSelectProps<T, true> &
    SelectLabel &
    SharedCustomSelectProps<T> & {
      onChange?: (values: T[]) => void
      value?: Array<SelectValue<T>> | null | undefined
    }
