import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

ReactDOM.render(<App courses = {course} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
