const addToDb = (time) => {
    const breakTime = {second:time};

    localStorage.setItem('break-time', JSON.stringify(breakTime));

}

const getStoredBreakTime = () =>{
    let breakTime = {}

    const storedBreakTime = localStorage.getItem('break-time');
    if(storedBreakTime){
        breakTime = JSON.parse(storedBreakTime);
    }
    return breakTime;

}

export  {addToDb, getStoredBreakTime}