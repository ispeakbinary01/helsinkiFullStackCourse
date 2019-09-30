import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = (props) => (
    <p>{props.text}</p>
    )

const Button = (props) => (
    <button onClick = {props.clickHandler}>
        {props.buttonText}
    </button>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const randomValue = () => {
        let min = 1
        let max = 5
        let rand = min + Math.floor((Math.random() * (max - min)))

        setSelected(rand)
    }

    const vote = (i, arr) => {
        arr[i] += 1
    }

    return (
        <div>
            <Display text = {props.anecdotes[selected]}/>
            <Button clickHandler = {() => randomValue()} buttonText = "Random Quote" />
            <pre></pre>
            <Button clickHandler = {() => vote(props.anecdotes.indexOf(props.anecdotes[selected]), props.votes)} buttonText = "Vote"/>
        </div>
    )
}

const votes = Array.apply(null, new Array(5)).map(Number.prototype.valueOf, 0)
const copy = [...votes]

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(<App anecdotes = {anecdotes} votes = {copy} />, document.getElementById('root'));
