import React, { useState } from 'react'
const Counter = (WrappdeComponent) => {
  function Counter(props) {
    const [count, setCount] = useState(0)
    function increament() {
      setCount(count + 1)
    }
    return (
      <div>
        <WrappdeComponent count={count} increament={increament} {...props} />
      </div>
    )
  }
  return Counter
}
export default Counter
