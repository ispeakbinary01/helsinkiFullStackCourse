import React from 'react'

const Contact = ({contact, deleteContact}) => {
    return (
        <li>
        {contact.name} {contact.number} 
        <button onClick = {() => {if(window.confirm('Delete the item?')) deleteContact()}}>Delete</button>
        </li>
    )
}

export default Contact