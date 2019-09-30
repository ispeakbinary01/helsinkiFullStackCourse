import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3
            },
            {
                name: "Redux",
                exercises: 11,
                id: 4
            }
        ]
    }

    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(course => 
                <Course 
                    key = {course.id}
                    course = {course}
                />
                )}
        </div>
    )
}

export default App