import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { BsPatchCheck } from 'react-icons/bs';
import { TbWorldUpload } from 'react-icons/tb';
const Specility = () => {
    return (
        <div className='bg-white'>
            <div className='flex justify-center items-center  divide-x divide-solid-2 my-3 mt-7 flex-wrap '>

                <div className='flex justify-center items-center flex-col w-80 my-5 shadow-md'>
                    <div className='flex justify-start items-center w-full p-2'>
                        <FaShippingFast className=' text-blue-500 w-16 h-16' />
                        <h1 className=' capitalize font-bold text-black text-2xl p-3'>Fast <br /> Response</h1>
                    </div>
                    <p className='p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit</p>
                </div>
                <div className='flex justify-center items-center flex-col w-80 my-5 shadow-md'>
                    <div className='flex justify-start items-center w-full p-2'>
                        <BsPatchCheck className=' text-blue-500 w-16 h-16' />
                        <h1 className=' capitalize font-bold text-black text-2xl p-3'>Fast <br /> Response</h1>
                    </div>
                    <p className='p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit</p>
                </div>
                <div className='flex justify-center items-center flex-col w-80 my-5 shadow-md'>
                    <div className='flex justify-start items-center w-full p-2'>
                        <TbWorldUpload className=' text-blue-500 w-16 h-16' />
                        <h1 className=' capitalize font-bold text-black text-2xl p-3'>Fast <br /> Response</h1>
                    </div>
                    <p className='p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit</p>
                </div>
            </div>
        </div>
    );
};

export default Specility;