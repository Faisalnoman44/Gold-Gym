import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() =>{
        fetch('../fakeData/data.json')
        .then(res => res.json())
        .then(data =>console.log(data))
    },[])

    return (
        <div className='exercises'>
            <h1 className='bg-slate-500'>card</h1>
            <h1 className='bg-blue-500'>Left side</h1>
        </div>
    );
};

export default Exercises;