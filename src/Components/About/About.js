import React from 'react';
import { FaLocationArrow } from 'react-icons/fa'

const About = () => {
    return (
        <div>
            <div className='flex gap-3'>
                <img className='rounded-full w-14' src="https://placeimg.com/80/80/people" alt="" />
                <div>
                    <h4 className='text-lg font-bold'>Abdullah Al Noman</h4>
                    <p className='text-gray-400 flex gap-2'>
                        <FaLocationArrow></FaLocationArrow>
                        <small> Dhaka,Bangladesh</small>
                    </p>
                </div>
            </div>
            <div className='flex justify-around bg-gray-200 p-2 rounded-xl mt-5'>
                <div>
                    <h3>
                        <span className='text-2xl font-bold'>61</span>
                        <small className='font-bold text-gray-400'>kg</small>
                    </h3>
                    <h2 className='text-xl font-semibold text-gray-400'>Weight</h2>
                </div>
                <div>
                    <h3>
                        <span className='text-2xl font-bold'>5.4</span>
                    </h3>
                    <h2 className='text-xl font-semibold text-gray-400'>Height</h2>
                </div>
                <div>
                    <h3>
                        <span className='text-2xl font-bold'>21</span>
                        <small className='font-bold text-gray-400'>yrs</small>
                    </h3>
                    <h2 className='text-xl font-semibold text-gray-400'>Height</h2>
                </div>
            </div>
        </div>
    );
};

export default About;