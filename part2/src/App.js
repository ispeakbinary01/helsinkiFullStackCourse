import React, { useState } from 'react'
import Note from './components/Note'

const App = ({ notes }) => {
    const [arrNotes, setNotes] = useState(notes)
    const [newNote, setNewNote] = useState (
        "a new note..."
    )
    const [showAll, setShowAll] = useState(true)
    const rows = () =>
    notesToShow.map(note => 
        <Note
            key = {note.id}
            note = {note}
        />            
        )

        const addNote = (event) => {
            event.preventDefault()
            const noteObject = {
                content: newNote,
                date: new Date().toISOString(),
                important: Math.random() > 0.5,
                id: notes.length + 1,
            }
            setNotes(notes.concat(noteObject))
            setNewNote('')
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