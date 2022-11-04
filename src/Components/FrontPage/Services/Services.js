import React from 'react';
import { FaDharmachakra } from 'react-icons/fa';
import { GiToolbox } from 'react-icons/gi';
import { GiGearStickPattern } from 'react-icons/gi';
import { CgMicrobit } from 'react-icons/cg';

const Services = () => {
    return (
        <div className="w-full  h-full bg-[url(https://i.ibb.co/vP5h2h1/services.jpg)] bg-cover">

            <div className=' grid lg:grid-cols-2  lg:gap-4 grid-cols-1 justify-items-center  mx-10 py-10'>
                <div className='lg:p-16'>
                    <FaDharmachakra className=' w-20 h-20 text-white m-3' />
                    <h1 className=" lg:text-3xl text-xl uppercase font-bold"> <span className=' text-white border-solid border-b-2 border-blue-500 p-3'>Engine </span> <span className='text-yellow-400'>Parts</span>  </h1>
                    <p className="py-6 lg:pr-20 pr-0 mt-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className='lg:p-16'>
                    <GiToolbox className=' w-20 h-20 text-white m-3' />
                    <h1 className="lg:text-3xl text-xl uppercase font-bold"> <span className=' text-white border-solid border-b-2 border-blue-500 p-3'>Engine </span> <span className='text-yellow-400'>Parts</span>  </h1>
                    <p className="py-6 lg:pr-20 pr-0 mt-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className='lg:px-16'>
                    <GiGearStickPattern className=' w-20 h-20 text-white m-3' />
                    <h1 className="lg:text-3xl text-xl uppercase font-bold"> <span className=' text-white border-solid border-b-2 border-blue-500 p-3'>Engine </span> <span className='text-yellow-400'>Parts</span>  </h1>
                    <p className="py-6 lg:pr-20 pr-0 mt-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className='lg:px-16'>
                    <CgMicrobit className=' w-20 h-20 text-white m-3' />
                    <h1 className="lg:text-3xl text-xl uppercase font-bold"> <span className=' text-white border-solid border-b-2 border-blue-500 p-3'>Engine </span> <span className='text-yellow-400'>Parts</span>  </h1>
                    <p className="py-6 lg:pr-20 pr-0 mt-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

            </div>



        </div>
    );
};

export default Services;