import React from 'react';
import ReactDOM from 'react-dom';
import Note from './components/Note'
import App from './App'

const notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:38:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]
// const App = ({ notes }) => {

//     const rows = () =>
//     notes.map(note => 
//         <Note
//             key = {note.id}
//             note = {note}
//         />            
//         )

//     return (
//         <div>
//             <h1>Notes</h1>
//             <ul>
//                 {/* <li>{notes[0].content}</li>
//                 <li>{notes[1].content}</li>
//                 <li>{notes[2].content}</li> */}
//                 {/* {notes.map(note => <li>{note.content}</li>)} */}
//                 {rows()}
//             </ul>
//         </div>
//     )
// }

// const result = notes.map(note => note.content)
// console.log(result)
ReactDOM.render(<App notes = {notes} />, document.getElementById('root'));
