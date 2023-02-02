import React from 'react'
import Counter from '../HOC/Counter'
function B(props) {
  const { count, increament, name } = props
  return (
    <div>
      <h2 onMouseOver={increament}>{name} {count} Click</h2>
    </div >
  )
}

export default Counter(B)
