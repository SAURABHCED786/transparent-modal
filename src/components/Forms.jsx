import React from 'react'
import { useState } from 'react'

const Forms = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    class: "",
    school: "",
    contact: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${data.name} ${data.age} ${data.class} ${data.school} ${data.contact}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Name </label>
        <input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} /><br /><br />
        <label>Enter Age </label>
        <input type="text" value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })} /><br /><br />
        <label>Enter Class </label>
        <input type="text" value={data.class} onChange={(e) => setData({ ...data, class: e.target.value })} /><br /><br />
        <label>Enter School </label>
        <input type="text" value={data.school} onChange={(e) => setData({ ...data, school: e.target.value })} /><br /><br />
        <label>Enter Contact </label>
        <input type="text" value={data.contact} onChange={(e) => setData({ ...data, contact: e.target.value })} /><br /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
export default Forms
