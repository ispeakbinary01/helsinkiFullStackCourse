import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
    return (
        <div>
            <Header course = {course} />
            <Content course = {course} />
            <Total course = {course} />
        </div>
    )
}

const Content = (props) => {
    const part = props.course.parts
    return (
        <div>
           {part.map(part => 
            <Part key = {part.id} name = {part.name} exercises = {part.exercises} />
            )}
        </div>
    )
}

const Header = (props) => {
    return (
            <h2>{props.course.name}</h2>
    )
}

const Part = (props) => {
    return (
        <>
        <p>{props.name}: {props.exercises}</p>
        </>
    )
}

const Total = (props) => {
    const parts = props.course.parts
    const total = parts.map(part => part.exercises).reduce((sum, currentValue) => sum + currentValue, 0)
    return (
        <p>Total {total} exercises</p>
    )
}

export default Course