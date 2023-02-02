import React from 'react'
import { FirstName } from './MainContex'
function ComponentC() {
  return (
    <div>
      <h1>Component C</h1>
      <FirstName.Consumer>
        {(fname) => {
          return <h2>My Name is {fname}</h2>
        }}
      </FirstName.Consumer>
    </div>
  )
}

export default ComponentC
