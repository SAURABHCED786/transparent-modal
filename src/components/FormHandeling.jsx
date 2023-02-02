import React from 'react'
import { useState } from 'react'

const FormHandeling = () => {
  const [data, setData] = useState({
    name: "",
    email: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const new_value = (name === "email") ? value.toLowerCase().replace("#", "@") : value

    setData((prev) => {
      console.log(prev, 'prev');
      return {
        ...prev, [name]: new_value
      }
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target[0].value, "eee");
    console.log(e.target[1].value, "eee");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data.name} name="name" onChange={handleChange} placeholder='Enter Name' />
        <br />
        <br />
        <input type="email" value={data.email} name="email" onChange={handleChange} placeholder='Email' />
        <br />
        <br />
        <input type="submit" value="sabmit" />
      </form>
    </div>
  )
}

export default FormHandeling
