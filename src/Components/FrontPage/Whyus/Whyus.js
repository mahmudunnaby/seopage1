import React from 'react';
import whyusimg from '../../../Asset/whyus.png'

const Whyus = () => {
    return (
        <div className="hero  bg-white py-5">
            <div className="hero-content flex-col lg:flex-row">
                <img src={whyusimg} className=" md:w-[500px] w-60 rounded-lg " />
                <div>
                    <h1 className="lg:text-5xl text-2xl uppercase font-bold"> <span className=' text-yellow-500 border-solid border-b-2 border-yellow-500 p-3'>Why </span> <span className='text-blue-600'>Anncar</span> </h1>
                    <p className="py-6 lg:pr-20 pr-0 mt-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
    );
};

export default Whyus;