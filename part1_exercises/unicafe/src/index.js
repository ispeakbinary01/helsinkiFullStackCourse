import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    if(props.value === 0) {
        return (
            <p>No feedback given!</p>
        )
    }
    return(
    <div>
        <p>{props.text} {props.value}</p>
    </div>
    )
}

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

    const calcAverage = () => {
        
    }

    return (
        <div>
            <h1>Feedback for UniCafe</h1>
            <Button clickHandler = {() => setGoodValue(good + 1)} text = "Good" />
            <Button clickHandler = {() => setNeutralValue(neutral + 1)} text = "Neutral" />
            <Button clickHandler = {() => setBadValue(bad + 1)} text = "Bad" />
            <h1>Statistics</h1>
            <Statistics text = "Good: " value = {good}/>
            <Statistics text = "Neutral: " value = {neutral}/>
            <Statistics text = "Bad: " value = {bad}/>
            <Statistics text = "All: " value = {good + neutral + bad} />
            <Statistics text = "Average: " value = {(good - bad) / 3} />
            <Statistics text = "Positive percentage: "  value = {0}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
