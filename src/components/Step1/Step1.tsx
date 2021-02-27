import React from 'react'
//components:  
import { Input } from '../InputElement/Input'

export const Step1: React.FC = () => {

  return (
    <>
      <Input
        label="First Name"
        id="firstName"
        type="text"
        name="firstName"
        placeholder="First Name"
        />  
      <Input
        label="Last Name"
        id="lastName"
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />    
    </>  
  )
} 
  