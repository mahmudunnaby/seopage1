import React from 'react';
import { AiFillPhone, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { CgCalculator } from 'react-icons/cg';
import { FaStarOfLife } from 'react-icons/fa';
import { BiLocationPlus } from 'react-icons/bi';

const Navigation = () => {
    return (
        <div>
            {/* 
            ------------TOP NAVIGATION-------------------
            */}
            <div className='py-5 bg-black'>

                <div className='flex flex-col md:flex-row justify-center items-center divide-x-2 '>

                    <div className=' flex justify-center items-center pr-5'>
                        <AiFillPhone className='mr-2 text-blue-600' />
                        <p className=' text-[#e9e9e9] text-xs md:text-base'>786-842-0320</p>
                    </div>

                    <div className=' flex justify-center items-center pl-5'>
                        <CiMail className='mr-2 text-blue-600' />
                        <p className=' text-[#e9e9e9] text-xs md:text-base'>sales@anncarequipment.com</p>
                    </div>
                </div>
            </div>

            {/* 
-------------------------NAVIGATION----------------------------------
*/}
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <div className=' flex justify-center items-center'>
                                    <AiOutlinePhone />
                                    <span>778844</span>
                                </div>
                                <div className=' flex justify-center items-center'>
                                    <AiOutlinePhone />
                                    <p></p>
                                </div>
                                <div className=' flex justify-center items-center'>
                                    <AiOutlinePhone />
                                    <p>Phone</p>
                                </div>
                                <AiOutlineMail />
                                <BiLocationPlus />
                                <li><a>HOME</a></li>
                                <li><a>ABOUT</a></li>
                                <li><a>BRANDS</a></li>
                                <li><a>PARTS</a></li>
                                <li><a>EQUIPMENTS</a></li>
                                <li><a>CONTACTS</a></li>
                            </ul>
                        </div>
                        <div className='flex justify-center items-center'>
                            <FaStarOfLife className='text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full p-3' />
                            <a className="btn btn-ghost normal-case text-xl">trade</a>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><a className=' capitalize font-bold hover:text-yellow-400 '>HOME</a></li>
                            <li><a className=' capitalize font-bold hover:text-yellow-300 '>ABOUT</a></li>
                            <li><a className=' capitalize font-bold hover:text-yellow-300 '>BRANDS</a></li>
                            <li><a className=' capitalize font-bold hover:text-yellow-300 '>PARTS</a></li>
                            <li><a className=' capitalize font-bold hover:text-yellow-300 '>EQUIPMENTS</a></li>
                            <li><a className=' capitalize font-bold hover:text-yellow-300 '>CONTACTS</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-2xl'>
                            <CgCalculator className=' text-white ml-2' />
                            <a className=" text-white font-bold ">Need Estimate</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navigation;