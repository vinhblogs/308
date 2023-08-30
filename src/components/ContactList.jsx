import React from 'react'
import contacts from '../data/contacts'

const ContactList = ({onDelete}) => {
  return (
    <div>
        <h2>contac list</h2>
        <ul>
            {contacts.map(contact=>(
                <li key={contact.id}>
                    {contact.name} - {contact.phone}
                    <button onClick={()=>onDelete(contact.id)}>Delete</button>
                    {console.log("phone",contact.phone)}
                </li>
            ))}
        </ul>
    
    </div>
  )
}

export default ContactList