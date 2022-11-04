import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { CiTwitter } from 'react-icons/ci';
import { ImLinkedin } from 'react-icons/im';
import { FaStarOfLife } from 'react-icons/fa';
import { BiLocationPlus } from 'react-icons/bi';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return (

        <div className='bg-blue-900 py-10'>
            <div className='flex justify-center items-center pt-10'>
                <FaStarOfLife className='text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full p-3' />
                <p className=" text-white ml-2 normal-case text-xl">trade</p>
            </div>
            <footer className="footer p-10  text-white">

                <div className='w-40'>
                    <span className="footer-title uppercase">Grow With ANNCER</span>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.</p>
                    <div className=' flex justify-center items-center'>
                        <BsFacebook className='mx-2 mt-2' />
                        <BsInstagram className='mx-2 mt-2' />
                        <CiTwitter className='mx-2 mt-2' />
                        <ImLinkedin className='mx-2 mt-2' />
                    </div>
                </div>
                <div>


                    <span className="footer-title">Company</span>

                    <div className=' flex justify-center items-center'>
                        <AiOutlinePhone />
                        <span className='ml-2'>778-84444</span>
                    </div>
                    <div className=' flex justify-center items-center'>
                        <AiOutlineMail />
                        <p className='ml-2'>abc@vfad.com</p>
                    </div>
                    <div className=' flex justify-center items-center'>
                        <BiLocationPlus />
                        <p className='ml-2'>1/11 North Bgay</p>
                    </div>

                </div>
                <div>
                    <span className="footer-title">Useful Links</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Get Free Estimate</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque doloribus</span>
                        </label>
                        <div className="relative">

                            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 left-0 rounded-2xl ">Reuest a Quote</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;