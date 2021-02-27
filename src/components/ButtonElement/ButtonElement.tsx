import React from 'react'
import { Button } from 'react-bootstrap'

type ContainerPropsType = {
  innerTextValue: string
}

export const ButtonElement: React.FC<ContainerPropsType> = props => {
  return (
    <Button variant="primary" type="submit">
      { props.innerTextValue }
    </Button>
  )
}