import React from 'react';
import wehave from '../../../Asset/wehaveall2.jpg'

const Wehave = () => {
    return (
        <div className="w-full  lg:h-[500px] h-[700px] bg-[url(https://i.ibb.co/4gBgrz8/wehaveall.jpg)] bg-cover mt-20">
            <div className=' relative'>
                <img className=' absolute lg:w-[40%]  left-5  md:h-80 md:left-[30%] top-20 w-80' src={wehave} alt="" />

                <div className=' p-5 bg-blue-900 lg:w-[50%] w-72 left-10 top-40 relative lg:left-[40%] md:left-[300px] lg:top-36  '>

                    <h1 className=' uppercase text-3xl font-bold text-yellow-400 py-3'> <span className=' text-blue-500'>We have the part </span> you need</h1>
                    <p className=' text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, illum? Laudantium autem neque repellat sit officiis consequuntur</p>
                    <button className="btn btn-sm bg-blue-500 text-white my-5 rounded-2xl">Request Part</button>
                </div>
            </div>
        </div>
    );
};

export default Wehave;