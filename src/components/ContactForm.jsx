import React, { useState } from 'react'

const ContactForm = ({ onAdd }) => {
    const[name,setName]=useState("")
    const [phone,setPhone]=useState("")

    const handleSubmit= (e)=>{
        e.preventDefault();
        onAdd({name,phone})
        setName("")
        setPhone("")
    }
  return (
    <div>
        <h2>Add contact</h2>
        <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='name'
        value={name}
        onChange={e=>setName(e.target.value)} />   

        <input type="text"
        placeholder='phone'
        value={phone}
        onChange={e=>setPhone(e.target.value)} />  
        <button type="submit">Add</button>
        <button>fail</button>
        </form>
    </div>
  )
}

export default ContactForm