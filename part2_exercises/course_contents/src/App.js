
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'
import { all } from 'q';

const App = ({ courses }) => {
    const allCourses = () => courses.map(course => 
        <Course
            key = {course.id}
            course = {course}
        />
        )
    return (
        <div>
            {allCourses()}
        </div>
    )
}
    

export default App