import React, {useState, useEffect} from 'react';
import Contact from './components/Contact';
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const contact = {
      name: newName,
      number: newNumber,
    }
    if(people.some(p => p.name === contact.name)) {
      alert(`${newName} is already in the phonebook!`)
    } else {
      setPeople(people.concat(contact))
      setNewName('')
      setNewNumber('')
    }
  }


  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  useEffect(() => {
    axios
    .get("http://localhost:3001/people")
    .then(r => {
      setPeople(r.data)
    })
  }, [])



  const showContacts = () => 
    people.map(person => 
      <Contact
        key = {person.name}
        contact = {person}
      />
      )
       return (
    <div>
      <h2>Phonebook</h2>
      <div>
      </div>
      <h1>Add contact</h1>
      <Form addContact = {addContact} newName = {newName} handleName = {handleName} 
        newNumber = {newNumber} handleNumber = {handleNumber}
      />
      <h2>Contacts</h2>
      {showContacts()}
    </div>
  )
}

export default App
