import React, {useState} from 'react';
import Name from './components/Name'

const App = () => {
  const [people, setPeople] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const contact = {
      name: newName,
    }
    console.log("THIS IS contact.name ", contact.name)
    if(people.some(p => p.name === contact.name)) {
      alert(`${newName} is already in the phonebook!`)
    } else {
      setPeople(people.concat(contact))
      setNewName('')
    }
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const showContacts = () => 
    people.map(person => 
      <Name
        key = {person.name + Math.random()}
        contact = {person}
      />
      )

  return (
    <div>
      <h2>Phonebook</h2>
      {showContacts()}
      <form onSubmit = {addContact}>
        <div>
          name: <input value = {newName} onChange = {handleName} />
        </div>
        <button type = "submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <p>...</p>
    </div>
  )
}

export default App;
