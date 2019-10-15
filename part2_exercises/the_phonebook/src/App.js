import React, {useState, useEffect} from 'react';
import Contact from './components/Contact';
import Form from './components/Form'
import contactService from './services/contacts'

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    // console.log("After preventdefault")
    // const newContact = {
    //   name: newName,
    //   number: newNumber,
    // }
    // console.log("New contact", newContact)
    // console.log("Sup")
    // contactService
    // .create(newContact)
    // .then(con => {
    //   if(people.some(p => p.name === con.name)) {
    //     alert(`${newName} is already in the phonebook!`)
    //   } else {
    //     setPeople(people.concat(con))
    //     console.log('All people', people)
    //     setNewName('')
    //     setNewNumber('')
    //   }
    // })
    if(people.findIndex(person => person.name === newName) > -1) {
      alert(newName + ' is already taken')
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
