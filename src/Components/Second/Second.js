import React from 'react';

const Second = ({second, handleAddBreakTime}) => {
    return (
        <div>
            <p onClick={()=> handleAddBreakTime(second)} className='bg-white rounded-full p-2 time'>{second}s</p>
        </div>
    );
};

export default Second;