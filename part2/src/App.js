import React from 'react'
import Note from './components/Note'

const App = ({ notes }) => {

    const rows = () =>
    notes.map(note => 
        <Note
            key = {note.id}
            note = {note}
        />            
        )

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {/* <li>{notes[0].content}</li>
                <li>{notes[1].content}</li>
                <li>{notes[2].content}</li> */}
                {/* {notes.map(note => <li>{note.content}</li>)} */}
                {rows()}
            </ul>
        </div>
    )
}

export default App