import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FooterTaxi = () => {
    return (
        <>
            <div className='h-max w-full bg-[rgb(255,237,230)] pt-20'>

                <div className='h-max sm:w-[95%] w-[90%] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto gap-16'>

                    <div className='h-max flex flex-col sm:items-start items-center'>
                        <h2 className='text-[rgb(15,23,42)] text-[20px] font-bold'>About us</h2>
                        <p className='text-[rgb(58,58,58)] mt-6  sm:text-start text-center'>Matrix Global Solutions excels in BPO and outsourcing services, driven by industry experts and a dedicated team, propelling your business to new heights of success with expertise and finesse.</p>
                        <div className='text-[rgb(0,0,0)] flex gap-1 mt-5'>
                            <FaFacebookSquare className='text-[17px] cursor-pointer' />
                            <FaSquareInstagram className='text-[17px] cursor-pointer' />
                            <FaLinkedin className='text-[17px] cursor-pointer' />
                            <FaWhatsappSquare className='text-[17px] cursor-pointer' />
                        </div>
                    </div>

                    <div className='h-max flex flex-col md:items-start items-center'>
                        <h2 className='text-[rgb(15,23,42)] text-[20px] font-bold'>Services</h2>
                        <ul className='mt-6 flex flex-col gap-2'>
                            <Link to={"/contact-center-as-a-service"}>
                                <li className='md:text-start text-[rgb(58,58,58)] text-center hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>Contact Center as a Service</li>
                            </Link>
                            <Link to={"/offshore-talent-pool"}>
                                <li className='md:text-start text-center text-[rgb(58,58,58)] hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>Offshore Talent Pool</li>
                            </Link>
                            <Link to={"/home-security"}>
                                <li className='text-[rgb(58,58,58)] md:text-start text-center hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>Home Security</li>
                            </Link>
                            <Link to={"/taxi-dispatch"}>
                                <li className=' md:text-start text-center text-[rgb(254,49,49)] duration-200 cursor-pointer'>Taxi Dispatch Services</li>
                            </Link>
                            <Link to={"/dispatch-order-management"}>
                                <li className=' md:text-start text-[rgb(58,58,58)] text-center hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>Dispatch Order Management</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='h-max flex flex-col sm:items-start items-center'>
                        <h2 className='text-[rgb(15,23,42)] text-[20px] font-bold'>Useful Links</h2>
                        <ul className='mt-6 flex flex-col gap-2'>
                            <Link to={"/"}>
                                <li className='sm:text-start text-[rgb(58,58,58)]  text-center hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>Home</li>
                            </Link>
                            <Link to={'/about'}>
                                <li className='sm:text-start text-center text-[rgb(58,58,58)] hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>About</li>
                            </Link>
                            <Link to={"/career"}>
                                <li className='text-[rgb(58,58,58)] sm:text-start text-center hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>Career</li>
                            </Link>
                            <Link to={"/contact"}>
                                <li className='text-[rgb(58,58,58)] sm:text-start text-center hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>Contact</li>
                            </Link>
                            <Link to={"/privacy-policy"}>
                                <li className='text-[rgb(58,58,58)] sm:text-start text-center hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>Privacy Policy</li>
                            </Link>
                            <Link to={"/term-of-use"}>
                                <li className='text-[rgb(58,58,58)] sm:text-start text-center hover:text-[rgb(254,49,49)] duration-200 cursor-pointer'>Term of Use</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='h-max px-1 flex flex-col  md:items-start items-center m-0 p-0'>
                        <h2 className='text-[rgb(15,23,42)] text-[20px] font-bold'>Contact Us</h2>
                        <ul className='mt-6 flex flex-col gap-2 w-full m-0 p-0'>
                            <li className='text-[rgb(58,58,58)] md:text-start text-center break-words'>matrixglobal7860@gmail.com</li>
                            <li className='text-[rgb(58,58,58)] w-full md:text-start text-center'>+92 317 4854894</li>

                            <div style={{ width: '100%', marginTop: "20px" }}><iframe width="100%" height="150" frameborder='"0"' scrolling='"no"' marginheight='"0"' marginwidth='"0"' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pia%20road%20Al-Rehman%20Arcade%20johar%20town%20laore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>

                        </ul>
                        <div></div>
                    </div>
                </div>

                <div className='h-16 w-full border-t border-[rgba(221,24,60,0.27)] flex justify-center items-center mt-14'>
                    <p className='text-[rgb(96,92,74)] text-[14px]'>Copyright © 2024 Matrix Global Solutions</p>
                </div>
            </div>
        </>
    )
}

export default FooterTaxi