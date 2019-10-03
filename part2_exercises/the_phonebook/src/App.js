import React, {useState} from 'react';
import Name from './components/Contact'
import Contact from './components/Contact';

const App = () => {
  const [people, setPeople] = useState([
    {name: 'Arto Hellas', number: '040-123456'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const contact = {
      name: newName,
      number: newNumber,
    }
    console.log("THIS IS contact.name ", contact.name)
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
      <form onSubmit = {addContact}>
        <div>
          name: <input value = {newName} onChange = {handleName} />
        </div>
        <div>
          number: <input value = {newNumber} onChange = {handleNumber} />
        </div>
        <button type = "submit">Add</button>
      </form>
      <h2>Numbers</h2>
      {showContacts()}
    </div>
  )
}

export default App;
