
import About from '../About/About';
import Details from '../Details/Details';
import Second from '../Second/Second';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Information.css'

const Information = ({ exerciseTime, handleAddBreakTime, breakTime, setExerciseTime }) => {

    const notify = () => {
        if (exerciseTime && breakTime) {
            toast.success('Congratulations', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setExerciseTime(0)
        }

    }

    return (
        <div className='mt-5 p-3'>
            <About></About>
            <div className='mt-7 mb-10'>
                <h2 className='text-xl font-semibold my-7'>Add A Break</h2>
                <div className='bg-gray-200 flex justify-around p-4 rounded-xl'>
                    <Second handleAddBreakTime={handleAddBreakTime} second={10}></Second>
                    <Second handleAddBreakTime={handleAddBreakTime} second={20}></Second>
                    <Second handleAddBreakTime={handleAddBreakTime} second={30}></Second>
                    <Second handleAddBreakTime={handleAddBreakTime} second={40}></Second>
                </div>
            </div>
            <h2 className='text-xl font-semibold my-8'>Exercise Details</h2>
            <div className='mb-6'>
                <Details name={'Exercise Time'} time={exerciseTime}></Details>
                <Details name={'Break Time'} time={breakTime}></Details>
            </div>
            <div className='mt-8'>
                <button onClick={() => notify()} className="btn btn-info w-full mb-5">Activity Completed</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Information;