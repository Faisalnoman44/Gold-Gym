import React from 'react';

const Exercise = ({ exercise, handleAddToExerciseTime}) => {
    // console.log(exercise);
    const { name, picture, time,} = exercise;
    return (
        <div>
            <div className="card w-[350px] bg-base-100 shadow-xl mb-2">
                <figure><img className='h-64 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-semibold mb-2'>Time: {time}sec</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=>handleAddToExerciseTime(time)} className="btn btn-info w-52">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise; <h1>This is</h1>