import React from 'react';

const Form = ({addContact, newName, handleName, newNumber, handleNumber}) => {
    return (
        <div>
            <form onSubmit = {addContact()}>
                    name: <input value = {newName} onChange = {handleName} />
                <br/>
                    number: <input value = {newNumber} onChange = {handleNumber} />

                <button type = "submit">Add Contact</button>
            </form>
        </div>
    )
}

export default Form