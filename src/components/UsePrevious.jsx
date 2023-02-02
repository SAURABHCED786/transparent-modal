import { Button, Card } from 'antd'
import React from 'react'
import { useState } from 'react'
const button = {
  margin: "5px"
}
function UsePrevious() {
  const initalValue = 0
  const [count, setCount] = useState(initalValue)
  const increamentFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div >
      <Card>
        <div>Count: {count}</div>
        <Button onClick={() => setCount(initalValue)} style={button}>Reset</Button>
        <Button onClick={() => setCount(prevCount => prevCount + 1)} style={button}>Increment</Button>
        <Button onClick={() => setCount(prevCount => prevCount - 1)} style={button}> Decrement</Button>
        <Button onClick={increamentFive} style={button}>Increment 5</Button>
      </Card>
    </div>
  )
}

export default UsePrevious
