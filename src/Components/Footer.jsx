"use client";
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='shadow-[0_-4px_10px_rgba(0,0,0,0.1)] mt-5 py-10'>
        <div className='max-w-10/12 mx-auto border-2 border-gray-300 rounded-3xl p-8 shadow-md'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <div className="flex items-center">
                        <a className="md:text-2xl text-[20px] font-bold">Shop 3D</a>
                    </div>
                    <p className='max-w-96 mt-5 mb-5 text-gray-400'>Trusted 3D asset marketplace — food, character, plant & more premium models. Safe, high-quality, and ready to download anytime.</p>
                    <div className='flex space-x-3 items-center'>
                        <a href="" className='text-gray-600'><FaLinkedin size={25}/></a>
                        <a href="" className='text-gray-600'><FaXTwitter size={25}/></a>
                        <a href="" className='text-gray-600'><FiInstagram size={25}/></a>
                        <a href="" className='text-gray-600'><FaGithub size={25}/></a>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-15 mt-15 lg:mt-0'>
                    <div>
                        <h1 className='font-bold'>Contact Information</h1>
                        <ul className='text-gray-400 space-y-2 mt-5'>
                            <li><a className='hover:underline' href=""><FaPhone color='gray' className='inline-block mr-1'/>+880 1712345678</a></li>
                            <li><a className='hover:underline' href=""><MdMarkEmailUnread className='inline-block mr-1'/>support@gmail.com</a></li>
                            <li><a className='hover:underline' href=""><MdMarkEmailUnread className='inline-block mr-1'/>sho-3d@gmail.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold'>Company</h1>
                        <ul className='text-gray-400 space-y-2 mt-5'>
                            <li><a className='hover:underline' href="">About</a></li>
                            <li><a className='hover:underline' href="">Contact</a></li>
                            <li><a className='hover:underline' href="">Careers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-gray-300 mt-5'>
                <div className='mt-4 text-gray-400 flex justify-between lg:flex-row flex-col-reverse'>
                    <h1>© 2025 Shop 3D. All rights reserved.</h1>
                    <div>
                        <a className='underline mr-4' href="">Privacy Policy</a>
                        <a className='underline' href="">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;