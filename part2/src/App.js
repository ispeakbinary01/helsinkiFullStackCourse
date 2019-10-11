import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState (
        "a new note..."
    )
    const [showAll, setShowAll] = useState(true)

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}

        noteService
        .update(id, changedNote)
        .then(returnedNote => {
            setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        })
        .catch(err => {
            alert(
                `the note '${note.content}' was already deleted from server`
            )
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
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
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
        </div>
    )
}

export default App