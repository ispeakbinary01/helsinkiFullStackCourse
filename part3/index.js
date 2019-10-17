const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
      },
      {
        id: 2,
        content: "Calculus is hard",
        date: "2019-05-30T17:30:31.098Z",
        important: true
      },
      {
        id: 3,
        content: "Statistics is beyond hard",
        date: "2019-05-30T17:30:31.098Z",
        important: true
      }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/notes', (req, res) => {
    res.json(notes)
})

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)

    if(note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})


const generateId = () => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id)) : 0

    return maxId + 1
}

app.post('/notes', (req, res) => {
    const body = req.body

    if(!body.content) {
        return res.status(400).json({
            error: "content missing"
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(),
    }

    notes = notes.concat(note)

    res.json(note)
})

app.delete('/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)

    res.status(204).end()
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)