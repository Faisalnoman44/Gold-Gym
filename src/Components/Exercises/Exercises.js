import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Information from '../Infomation/Information';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='exercises'>
            <div className='cards p-7 gap-5'>
                {
                    exercises.map(exercise => <Exercise
                        exercise={exercise}
                        key={exercise._id}
                    ></Exercise>)
                }
            </div>
            <div>
                <Information></Information>
            </div>

        </div>
    );
};

export default Exercises;