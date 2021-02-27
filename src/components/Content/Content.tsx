import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import './Content.scss'
//custom hook, inteface&type: 
import { useData } from '../../store/DataContext'
import { DataValues } from '../../types/type'
//components:
import { Step1 } from '../Step1/Step1'
import { Step2 } from '../Step2/Step2'

export const Content: React.FC = () => {

  const { data, setValues }: any = useData()

  const pages = [<Step1 />, <Step2 />]

  const [page, setPage] = useState(0)

  const onsubmit = (data: DataValues) => {
    setValues(data)
    setPage(page +1)
  }
 
  return (
    <div className="content">
      <Formik
        initialValues={{
          firstName: data.firstName, 
          lastName: data.lastName, 
          email: data.email, 
          password: data.password,
          confirmpassword: data.confirmpassword
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or more')
            .required('Required'),
          lastName: Yup.string()
            .max(15, 'Must be 20 characters or more')
            .required('Required'), 
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Must be minimum 6 characters').required('Required'),  
          confirmpassword: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают')
        })}
        onSubmit={(data: DataValues) => {
          setValues(data)
          console.log(data)
        } }
      >  
        <Form>
          {pages[page]}
          {page === pages.length - 1 ? (
            <div className="actions">
              <button className="btn btn-primary" onClick={() => {setPage(page - 1)}}>Back</button>
              <Button variant="primary" type="submit">Send</Button> 
            </div>
          ) : ( 
            <button className="btn btn-primary" onClick={() => onsubmit(data)}>Next</button>
          )}
        </Form>
      </Formik>
    </div>
  )
}