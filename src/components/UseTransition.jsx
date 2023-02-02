import { List } from '@shopify/polaris'
import React, { useState, useTransition } from 'react'

const UseTransition = () => {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  const LIST_SIZE = 20000

  function handleChange(e) {
    setInput(e.target.value)
    startTransition(() => {
      const l = []
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value)
      }
      setList(l)
    })
  }

  return <>
    <input type="text" value={input} onChange={handleChange} />
    {isPending ? (
      <div>Loading...</div>
    ) : (
      list.map((item, index) => <div key={index} >{item}</div>)
    )}
  </>
}

export default UseTransition
