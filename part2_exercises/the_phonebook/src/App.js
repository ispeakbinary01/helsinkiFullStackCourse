import React, {useState} from 'react';
import Name from './components/Name'

const contacts = [
  {

  }
]

const App = () => {
  const [people, setPeople] = useState([
    {name: "Arto Hellas"}
  ])
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const contact = {
      name: newName,
    }
    setPeople(people.concat(contact))
    setNewName('')
  }

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const showContacts = () => 
    people.map(person => 
      <Name
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
        <button type = "submit">Add</button>
      </form>
      {showContacts()}
      <h2>Numbers</h2>
      <p>...</p>
    </div>
  )
}

export default App;
