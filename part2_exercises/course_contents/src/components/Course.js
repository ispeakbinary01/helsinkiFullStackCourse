import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
    return (
        <p>{course.name}: {course.exercises}</p>
    )
}

export default Course