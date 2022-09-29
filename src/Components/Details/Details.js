import React from 'react';

const Details = ({name, time, exerciseTime}) => {
    return (
        <div className='flex justify-between text-lg bg-gray-200 p-3 rounded-xl mb-3'>
            <h3 className='font-semibold' >{name}</h3>
            <p className='text-gray-500'>{time} seconds</p>
        </div>
    );
};

export default Details;