import React from 'react'
//components:  
import { Input } from '../InputElement/Input'


export const Step2: React.FC = () => {

  return (
    <>
      <Input
        label="Password"
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        />   
      <Input
        label="Confirm Password"
        id="confirmpassword"
        type="password"
        name="confirmpassword"
        placeholder="Confirm Password"
      />
    </>  
  )
} 