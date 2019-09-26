import React from 'react';
import ReactDOM from 'react-dom';
// Create three new components: Header, Content and Total
// Header - Name of the course
// Content - Parts and their number of exercises
// Total - Total amount of exercises

const Header = (props) => {
    return (
            <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part = {props.part} exercises = {props.exercises}/>
            </div>
    )
}

const Total = (props) => {
    return (
        <p>
            Number of exercises: {props.exercises}
        </p>
    )   
}

const App = () => {
    const courses = {
        "Fundamentals of React": 10,
        "Using props to pass data": 7,
        "State of a component": 14
    }

    const courseObj = {
        name: "Half stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    }
    let total = 0
    Object.entries(courseObj.parts).map(([_, exercises]) => {
        total += exercises.exercises;
    })
    return (
        <div>
            <Header course = {courseObj.name} />
            {Object.entries(courseObj.parts).map(([n, e]) => {
                return(
                <Content part = {e.name} exercises = {e.exercises} />
                )
            })}
            <Total exercises = {total}/>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
