import React from 'react';
import { FaBars } from 'react-icons/fa'

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-28 shadow-lg">
                <div className="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl">Gold Gym</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div className='hidden md:block'>
                            <ul className='flex text-lg font-semibold gap-7 '>
                                <li><a href="home">Home</a></li>
                                <li><a href="contact">Contact</a></li>
                                <li><a href="service">Service</a></li>
                                <li><a href="about">About</a></li>
                            </ul>
                        </div>
                       
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle block md:hidden">
                            <div className=' flex justify-center '>
                                <FaBars className='text-xl'></FaBars>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="home">Home</a></li>
                            <li><a href="contact">Contact</a></li>
                            <li><a href="service">Service</a></li>
                            <li><a href="about">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;