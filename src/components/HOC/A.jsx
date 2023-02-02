import React from 'react'
import Counter from '../HOC/Counter'
function A(props) {
  const { count, increament, name } = props
  return (
    <div>
      <button onClick={increament}>{name} {count} Click</button>
    </div>
  )
}

export default Counter(A)
