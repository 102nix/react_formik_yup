export type DataValues = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  confirmPassword?: string
} | {}

export type SetDataValuesType = (values: DataValues) => void

export type TypeProps = DataValues | SetDataValuesType

export interface IValuesInput {
  label: string
  id: string
  type: string
  name: string
  placeholder: string
}

export type OnChangeType = React.Dispatch<any>