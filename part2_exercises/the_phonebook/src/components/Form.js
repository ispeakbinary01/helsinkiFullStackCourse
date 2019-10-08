import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form onSubmit = {props.addContact}>
                <div>
                    name: <input value = {props.newName} onChange = {props.handleName} />
                </div>
                <div>
                    number: <input value = {props.newNumber} onChange = {props.handleNumber} />
                </div>
                <button type = "submit">Add Contact</button>
            </form>
        </div>
    )
}

export default Form