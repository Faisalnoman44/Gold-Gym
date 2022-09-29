import React from 'react';
import { FaLocationArrow } from 'react-icons/fa'
import BodyDetails from '../BodyDetails/BodyDetails';

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
                <BodyDetails
                    value={62}
                    property={'kg'}
                    propertyName={'Weight'}
                ></BodyDetails>
                <BodyDetails
                    value={6.5}
                    propertyName={'Height'}
                ></BodyDetails>
                <BodyDetails
                    value={21}
                    property={'yers'}
                    propertyName={'Age'}
                ></BodyDetails>
            </div>
        </div>
    );
};

export default About;