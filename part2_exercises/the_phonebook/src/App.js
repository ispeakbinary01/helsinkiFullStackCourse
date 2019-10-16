import React, {useState, useEffect} from 'react';
import Contact from './components/Contact';
import Form from './components/Form'
import contactService from './services/contacts'

const AddMessage = ({ message }) => {
  const addStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16
  }
  if(message === null) {
    return null
  }
  return (
    <div style = {addStyle}>
      {message}
    </div>
  )
}

const ErrorMessage = ({ message }) => {
  const errorStyle = {
    color: "red",
    fontStyle: "italic",
    fontSize: 24
  }
  if(message === null) {
    return null
  }
  return (
    <div style = {errorStyle}>
      {message}
    </div>
  )
}

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [addMessage, setAddMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const deleteContact = id => {
    const contact = people.find(c => c.id === id)
    contactService
    .deleteContact(id)
    .then(r => {
      setPeople(people.map(p => p.id === id ? contact : r))
      setPeople(people.filter(n => n.id !== id))
    }).catch(e => {
      alert(
        `${contact.name}'s ${contact.number} is already deleted`
      )
      
    })
    
  }

  useEffect(() => {
    contactService
    .getAll()
    .then(initialContacts => {
      setPeople(initialContacts)
    })
  }, [])
  const showContacts = () => 
    people.map(person => 
      <Contact
        key = {person.id}
        contact = {person}
        deleteContact = {() => deleteContact(person.id)}
      />
      )

  const addContact = (event) => {
    event.preventDefault()
    if(people.findIndex(person => person.name === newName) > -1) {
      setErrorMessage(
        `Contact with name '${newName}' is already in phonebook!`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
    } else {
      const obj = {
        name: newName,
        number: newNumber
      }
      contactService
      .create(obj)
      .then(newP => {
        setPeople(people.concat(newP))
        setNewName('')
        setNewNumber('')
        setAddMessage(`Person with name '${newP.name}' has been added to the phonenook!`)
        setTimeout(() => {
          setAddMessage(null)
        }, 5000);
      })
    }
  }


  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }
       return (
    <div>
      <h2>Phonebook</h2>

      <AddMessage message = {addMessage} />
      <ErrorMessage message = {errorMessage} />
      <br/>
      <h1>Add contact</h1>
      {/* <Form onSubmit = {addContact} newName = {newName} handleName = {handleName} 
        newNumber = {newNumber} handleNumber = {handleNumber}
      /> */}
      <form onSubmit = {addContact}>
                    name: <input value = {newName} onChange = {handleName} />
                    number: <input value = {newNumber} onChange = {handleNumber} />
                <button type = "submit">Add Contact</button>
            </form>
      <h2>Contacts</h2>
      <ul>
      {showContacts()}
      </ul>
    </div>
  )
}

export default App
