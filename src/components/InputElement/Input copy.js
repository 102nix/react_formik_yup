import React from 'react'
import { useField } from 'formik'
import { Form } from 'react-bootstrap'

export const Input = ({label, ...props}) => {

  const [field, meta] = useField(props)

  return (
    <Form.Group>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="form-control"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ): null}
    </Form.Group>
  )
}
