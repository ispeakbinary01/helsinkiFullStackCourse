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

const Content = (props) => {
    return (
            <p>
                {props.part} {props.exercises}
            </p>
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
    const course = "Half Stack application development"
  //  const part1 = "Fundamentals of React"
   // const exercises1 = 10
   // const part2 = "Using props to pass data"
   // const exercises2 = 7
    // const part3 = "State of a component"
   // const exercises3 = 14
    const courses = {
        "Fundamentals of React": 10,
        "Using props to pass data": 7,
        "State of a component": 14
    }
    var total = 0
    Object.entries(courses).map(([part, exercises]) => {
        total += exercises;
    })
   // const total = courses.reduce((prev, next) => prev + next.)
    return (
        <div>
            <Header course = {course} />
            {Object.entries(courses).map(([name, exercises]) => {
                return (
                    <Content part = {name} exercises = {exercises}/>
                )
            })}
            <Total exercises = {total}/>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
