import React from 'react';

const Hero = () => {
    return (
        <div className="w-full  h-full bg-[url(https://i.ibb.co/w6RsLjK/Untitled-1.jpg)] bg-cover">
            <div className='flex flex-col-reverse lg:flex-row justify-around items-center h-full p-40  '>
                <div className=' flex-1  text-left  flex justify-center items-end flex-col lg:pt-0 pt-5 '>
                    <h1 className=' lg:text-5xl text-3xl uppercase font-bold'> <span className=' text-yellow-300'>Grow</span> <span className=' text-white'> your <br /> business </span> <span className=' text-blue-600'>with <br /> annncar</span> </h1>
                    <h1 className=' lg:text-2xl text-sm uppercase text-white'>high quality heavy equipment <br /> spareparts supplier</h1>
                </div>

                <div className=' flex-1 h-full flex justify-center items-center '>
                    <div>

                        <img
                            className=" lg:h-80 lg:w-80 h-72 w-72 "
                            src={require(`../../../Asset/5a3676c97fe392.9106826815135187935238.png`)}
                            alt='car'
                        />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;