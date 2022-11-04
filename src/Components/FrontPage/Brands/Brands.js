import React from 'react';
import brandsimg from '../../../Asset/brands.jpg'
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Brands = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={brandsimg} className="w-[500px]  " />
                <div>
                    <h1 className="lg:text-5xl text-2xl uppercase font-bold"> <span className=' text-blue-800 border-solid border-b-2 border-blue-600 p-3'>We sell the </span> <span className='text-yellow-500'>Anncar</span></h1>
                    <div className=' grid grid-cols-2 gap-2 justify-items-center '>

                        <div className='mt-20'>
                            <div className=' flex justify-start items-center'>
                                <h2 className=' capitalize font-bold'>KOMATSU </h2> <AiOutlineCopyrightCircle />
                            </div>

                            <p className="pr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi Quaerat fugiat ut assumenda excepturi</p>
                        </div>
                        <div className='mt-20'>
                            <div className=' flex justify-start items-center'>
                                <h2 className=' capitalize font-bold'>JCB </h2> <AiOutlineCopyrightCircle />
                            </div>
                            <p className="pr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi Quaerat fugiat ut assumenda excepturi</p>
                        </div>
                        <div className='mt-20'>
                            <div className=' flex justify-start items-center'>
                                <h2 className=' capitalize font-bold'>CAT </h2> <AiOutlineCopyrightCircle />
                            </div>
                            <p className="pr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi Quaerat fugiat ut assumenda excepturi</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Brands;