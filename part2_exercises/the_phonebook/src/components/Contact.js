import React from 'react'

const Contact = ({contact, deleteContact}) => {
    return (
        <li>
        {contact.name} {contact.number} 
        <button onClick = {deleteContact}>Delete</button>
        </li>
    )
}

export default Contact