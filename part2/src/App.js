import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/Notification'


const Footer = () => {
    const footerStyle = {
        color: "green",
        fontStyle: "italic",
        fontSize: 16
    }
    return (
        <div style = {footerStyle}>
            <br />
            <em>Note app. CS Helsinki 2019</em>
        </div>
    )
}

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState (
        "a new note..."
    )
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)


    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}

        noteService
        .update(id, changedNote)
        .then(r => {
            setNotes(notes.map(note => note.id !== id ? note : r))
        }).catch(e => {
            setErrorMessage(
                `Note '${note.content}' was already removed from server`
            )
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000);
            setNotes(notes.filter(n => n.id !== id))
        })
    }
    
    useEffect(() => {
        noteService
        .getAll()
        .then(initialNotes => {
            setNotes(initialNotes)
        })
    }, [])

    const rows = () =>
    notesToShow.map(note => 
        <Note
            key = {note.id}
            note = {note}
            toggleImportance = {() => toggleImportanceOf(note.id)}
        />            
        )

        const addNote = (event) => {
            event.preventDefault()
            const noteObject = {
                content: newNote,
                date: new Date().toISOString(),
                important: Math.random() > 0.5,
            }
            noteService
            .create(noteObject)
            .then(r => {
                setNotes(notes.concat(r))
                setNewNote('')
            })
        }
        const handleNote = (event) => {
            setNewNote(event.target.value)
        }

        const notesToShow = showAll ? notes 
            : notes.filter(note => note.important)
 
        return (
        <div>
            <h1>Notes</h1>


            <Notification message = {errorMessage} />


            <div>
                <button onClick = {() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {/* <li>{notes[0].content}</li>
                <li>{notes[1].content}</li>
                <li>{notes[2].content}</li> */}
                {/* {notes.map(note => <li>{note.content}</li>)} */}
                {rows()}
            </ul>
            <form onSubmit = {addNote}>
                <input value = {newNote} onChange = {handleNote}/>
                <button type = "submit">Save</button>
            </form>
            <Footer />
        </div>
    )
}

export default App