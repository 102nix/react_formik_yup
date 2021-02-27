import React from 'react';
import Form from 'react-bootstrap/Form'

type ContainerPropsType = {
  controlId: string
  title: string
  type: string
  placeholderText: string
  name: string
  reg: any
  error: boolean  
  helperText?: any
}

//DeepMap<Record<string, any>, FieldError> &

export const InputElement: React.FC<ContainerPropsType> = props => {
  console.log(props)
  return (
  <Form.Group controlId={props.controlId}>
    <Form.Label>{props.title}</Form.Label>
    <Form.Control 
      type={props.type} 
      placeholder={props.placeholderText}
      name={props.name} 
      ref={props.reg}
      // @ts-ignore 
      error={props.error.toString()}
      helperText={props.helperText}
    />
  </Form.Group>
  )
}