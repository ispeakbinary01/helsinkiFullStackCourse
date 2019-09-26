import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
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

    return (
        <div>
            <h1>Feedback for UniCafe</h1>
            <Button clickHandler = {() => setGoodValue(good + 1)} text = "Good" />
            <Button clickHandler = {() => setNeutralValue(neutral + 1)} text = "Neutral" />
            <Button clickHandler = {() => setBadValue(bad + 1)} text = "Bad" />
            <h1>Statistics</h1>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td><Statistic text = "Good: " value = {good}/></td>
                </tr>
                <tr>
                    <td><Statistic text = "Neutral: " value = {neutral}/></td>
                </tr>
                <tr>
                    <td><Statistic text = "Bad: " value = {bad}/></td>
                </tr>
                <tr>
                    <td><Statistic text = "All: " value = {good + bad + neutral}/></td>
                </tr>
                <tr>
                    <td><Statistic text = "Average: " value = {((good - bad) / 3).toFixed(2)} /></td>
                </tr>
                <tr>
                    <td><Statistic text = "Positive percentage: "  value = {0}/></td>
                </tr>
            </tbody>
            </table>    
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
