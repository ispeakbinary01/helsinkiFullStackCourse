import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => (
    <div>
        <p>{props.text} {props.value}</p>
    </div>
)

const Button = (props) => (
    <button onClick = {props.clickHandler}>
        {props.text}
    </button>
)




const App = () => {
    // save clicks for each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setGoodValue = (startingValue) => {
        setGood(startingValue)
    }
    const setNeutralValue = (startingValue) => {
        setNeutral(startingValue)
    }
    const setBadValue = (startingValue) => {
        setBad(startingValue)
    }

    return (
        <div>
            <h1>Feedback for UniCafe</h1>
            <Button clickHandler = {() => setGoodValue(good + 1)} text = "Good" />
            <Button clickHandler = {() => setNeutralValue(neutral + 1)} text = "Neutral" />
            <Button clickHandler = {() => setBadValue(bad + 1)} text = "Bad" />
            <h1>Statistics</h1>
            <Display text = "Good: " value = {good}/>
            <Display text = "Neutral: " value = {neutral}/>
            <Display text = "Bad: " value = {bad}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
