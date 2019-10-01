import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

const App = ({ courses }) => {

     const sum = courses.parts.reduce((totalEx, course) => totalEx + course.exercises, 0)
     return (
         <div>
            <h1>{courses.name}</h1>
            {courses.parts.map(course => 
                <Course 
                key = {course.id}
                course = {course}
                />
                )}
            <p>Total exercises: {sum}</p>
        </div>
    )
}
    

export default App