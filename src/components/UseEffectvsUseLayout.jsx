import { Button } from 'antd'
import React, { useEffect, useState, useLayoutEffect } from 'react'

function UseEffectvsUseLayout() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log("useEffect");
  }, [count])

  useLayoutEffect(() => {
    console.log("useLayoutEffects");
  }, [count2])

  return (
    <div>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Button onClick={() => setCount(c => c + 1)}>{count} Asynchronously</Button>
      </div>
      <div>
        <Button onClick={() => setCount2(c => c + 1)}>{count2} Synchronously</Button>
      </div>
    </div>
  )
}

export default UseEffectvsUseLayout
