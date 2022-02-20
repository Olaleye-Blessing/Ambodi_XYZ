import React from 'react'
import { useState } from 'react'

export const MintContext = React.createContext()

export const MintProvider = ({ children }) => {
  const [bool, setBool] = useState(false)
  const changeBool = () => {
    if (bool === false) {
      setBool(true)
    } else if (bool === true) {
      setBool(false)
    }
  }

  return (
    <MintContext.Provider value={{ bool, changeBool }}>
      {children}
    </MintContext.Provider>
  )
}

export default MintContext
