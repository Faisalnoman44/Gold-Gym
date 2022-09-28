import React from 'react';
import About from '../About/About';
import './Information.css'

const Information = () => {
    return (
        <div className='mt-5 p-3'>
            <About></About>
            <div className='mt-7 mb-10'>
                <h2 className='text-xl font-semibold my-7'>Add A Break</h2>
                <div className='bg-gray-200 flex justify-around p-4 rounded-xl'>
                    <p className='bg-white rounded-full p-2 time'>10s</p>
                    <p className='bg-white rounded-full p-2 time'>20s</p>
                    <p className='bg-white rounded-full p-2 time'>30s</p>
                    <p className='bg-white rounded-full p-2 time'>40s</p>
                </div>
            </div>
            <h2 className='text-xl font-semibold my-8'>Exercise Details</h2>
            <div className='mb-6'>
                <div className='flex justify-between text-lg bg-gray-200 p-3 rounded-xl mb-3'>
                    <h3 className='font-semibold' >Exercise time</h3>
                    <p className='text-gray-500'>200 seconds</p>
                </div>
                <div className='flex justify-between text-lg bg-gray-200 p-3 rounded-xl mb-3'>
                    <h3 className=''>Break time</h3>
                    <p className='text-gray-500'>20 seconds</p>
                </div>
            </div>
            <div className='mt-8'>
                <button className="btn btn-info w-full">Activity Completed</button>
            </div>
        </div>
    );
};

export default Information;