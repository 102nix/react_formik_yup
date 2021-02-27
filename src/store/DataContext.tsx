import React, { createContext, useContext, useState } from 'react';
import { DataValues, SetDataValuesType } from '../types/type'


const DataContext = createContext({})

export const DataProvider = ( {children}: any ) => {

  const [data, setData] = useState<DataValues>({})

  const setValues: SetDataValuesType = (values) => {
    console.log('!!!!')
    setData(prevValues => ({
      ...prevValues,
      ...values  
    }))
  }

  return (
    <DataContext.Provider value={{data, setValues}}>
      {children}
    </DataContext.Provider>
  )
  
}

export const useData = () => useContext(DataContext)