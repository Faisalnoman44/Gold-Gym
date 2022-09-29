import React from 'react';

const BodyDetails = ({value, property, propertyName}) => {
    return (
        <div>
            <div>
                <h3>
                    <span className='text-2xl font-bold'>{value}</span>
                    <small className='font-bold text-gray-400'>{property}</small>
                </h3>
                <h2 className='text-xl font-semibold text-gray-400'>{propertyName}</h2>
            </div>
        </div>
    );
};

export default BodyDetails;