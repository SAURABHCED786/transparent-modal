import React, { createContext } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
const FirstName = createContext();
function MainContex() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
      <FirstName.Provider value={"Saurabh"}>
        <ComponentC />
      </FirstName.Provider>
    </div>
  )
}

export default MainContex
export { FirstName }