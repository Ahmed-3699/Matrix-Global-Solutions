import React, { useState } from 'react'
import vision from '../../Images/vision-2372177_640.jpg'
import mission from '../../Images/mission.jpg'
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import ContactForm from '../utilis/ContactForm'
import FooterHome from '../Footer/FooterAbout';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Legacy = () => {

    return (
        <>
            <div className='h-max w-full bg-white pt-7'>
                <div className='bg-[rgb(240,240,240)] sm:w-[95%] w-[90%] h-max m-auto sm:py-12 py-8 px-5 rounded-lg'>
                    <h1 className='text-[rgb(255,0,0)] sm:text-4xl text-[27px] font-bold  md:text-center text-start w-full'>A Tradition of Excellence in Outsourcing</h1>
                    <p className='text-[rgb(58,58,58)] mt-7'>For over 3 years, we have been the trusted partner for businesses aiming to elevate their operations and surpass customer expectations. Rooted deeply in the outsourcing industry, our headquarters are proudly situated in the dynamic city of Richmond Hill, USA, while our expansive Business Success Center thrives in the bustling city of Lahore, the heart of Pakistan.</p>
                </div>

                <div className='h-max sm:w-[95%] w-[90%] grid lg:grid-cols-2 grid-cols-1 m-auto mt-12 gap-6 mb-12'>
                    {/* Vision */}

                    <div className='md:h-[450px] sm:h-[350px] h-max py-10 w-full border rounded-lg px-5 flex flex-col justify-center shadow-md shadow-slate-500'>
                        <h1 className='text-[rgb(0,0,0)] text-[22px] font-bold'>Empowering Enterprises, Enhancing Experiences</h1>
                        <p className='text-[rgb(58,58,58)] mt-2'>At the core of our organization is a resolute vision—to be the guiding light that paves the way to operational excellence and exceptional customer satisfaction.</p>
                    </div>
                    <div className='sm:h-[450px] h-[300px] overflow-hidden rounded-lg p-5 border shadow-md shadow-slate-500'>
                        <div className='h-full w-full rounded-lg overflow-hidden'>
                            <img className='h-full w-full hover:scale-110 duration-200' src={vision} alt="" />
                        </div>
                    </div>

                    {/* Mission */}

                    <div className='sm:h-[450px] h-[300px] overflow-hidden rounded-lg p-5 border shadow-md shadow-slate-500'>
                        <div className='h-full w-full rounded-lg overflow-hidden'>
                            <img className='h-full w-full hover:scale-110 duration-200' src={mission} alt="" />
                        </div>
                    </div>
                    <div className='md:h-[450px] sm:h-[350px] h-max py-12 w-full border rounded-lg px-5 flex flex-col justify-center shadow-md shadow-slate-500'>
                        <h1 className='text-[rgb(0,0,0)] text-[22px] font-bold'>Fostering Growth, Cultivating Achievement</h1>
                        <p className='text-[rgb(58,58,58)] mt-2'>Our mission is to empower enterprises of all sizes by unlocking their full potential with our tailored outsourcing solutions. Committed to innovation and client success, we aim to redefine outsourcing. In a constantly evolving world, we are the steadfast guide leading our clients toward a future full of limitless opportunities.</p>
                    </div>
                </div>

                <div className='h-max sm:w-[95%] w-[90%] m-auto'>
                    <h1 className='text-[rgb(255,0,0)] text-3xl font-bold text-center'>Our Core Values</h1>

                    <div className='w-full h-max mt-12 grid md:grid-cols-2 grid-cols-1 gap-6 mb-10'>

                        <div className='h-max w-full border rounded-lg pt-5 md:pb-[72px] pb-12 px-5 shadow-sm shadow-slate-500'>
                            <h1 className='text-[rgb(0,0,0)] font-bold text-[22px]'>Integrity</h1>
                            <p className='text-[rgb(58,58,58)] mt-3'>At the foundation of our organization is a steadfast commitment to integrity. We believe trust is the cornerstone of successful partnerships and are dedicated to upholding the highest ethical standards in everything we do.</p>
                        </div>
                        <div className='h-max w-full border rounded-lg pt-5 pb-12 px-5 shadow-sm shadow-slate-500'>
                            <h1 className='text-[rgb(0,0,0)] font-bold text-[22px]'>Innovation</h1>
                            <p className='text-[rgb(58,58,58)] mt-3'>In a rapidly evolving business landscape, we view innovation as a crucial element of our success. Our team of forward-thinking professionals continually explores new technologies, processes, and strategies to ensure our clients remain at the forefront of their industries.</p>
                        </div>
                        <div className='h-max w-full border rounded-lg pt-5 md:pb-[72px] pb-12 px-5 shadow-sm shadow-slate-500'>
                            <h1 className='text-[rgb(0,0,0)] font-bold text-[22px]'>Client-Focused Excellence</h1>
                            <p className='text-[rgb(58,58,58)] mt-3'>Our clients are the heartbeat of our organization, guiding every decision we make. We are committed to understanding their unique needs and delivering customized solutions that consistently exceed expectations.</p>
                        </div>
                        <div className='h-max w-full border rounded-lg pt-5 pb-12 px-5 shadow-sm shadow-slate-500'>
                            <h1 className='text-[rgb(0,0,0)] font-bold text-[22px]'>Collaboration</h1>
                            <p className='text-[rgb(58,58,58)] mt-3'>We believe that the best solutions arise from the synergy of diverse perspectives. We foster a collaborative work culture, encouraging open communication and cross-functional teamwork to unlock the full potential of our partnerships.</p>
                        </div>
                        <div className='h-max w-full border rounded-lg pt-5 md:pb-[72px] pb-12 px-5 shadow-sm shadow-slate-500'>
                            <h1 className='text-[rgb(0,0,0)] font-bold text-[22px]'>Relentless Progress</h1>
                            <p className='text-[rgb(58,58,58)] mt-3'>We refuse to settle for the status quo. Our relentless pursuit of excellence compels us to continually refine our processes, enhance our services, and provide ever-greater value to our clients.</p>
                        </div>
                        <div className='h-max w-full border rounded-lg pt-5 pb-12 px-5 shadow-sm shadow-slate-500'>
                            <h1 className='text-[rgb(0,0,0)] font-bold text-[22px]'>Enabling Growth</h1>
                            <p className='text-[rgb(58,58,58)] mt-3'>We foster a culture of enabling growth by encouraging our team members to take ownership, think innovatively, and make impactful decisions. This approach unlocks the full potential of our organization and drives success for our clients.</p>
                        </div>
                    </div>
                </div>

                <div className='h-max sm:w-[95%] w-[90%] m-auto border grid lg:grid-cols-2 grid-cols-1 mb-10'>
                    {/* Head Office */}

                    <div className='h-max w-full flex flex-col gap-1 border px-5 pt-5 pb-6'>
                        <div className='h-max w-full bg-[rgb(242,242,242)] py-2 pl-3'>
                            <h1 className='text-[rgb(58,58,58)] text-[23px] font-bold'>Head Office</h1>
                        </div>
                        <div className='h-max w-full flex items-center gap-5 py-2 sm:pl-10 pl-5'>
                            <div className='h-max w-max'>
                                <MdLocationOn className='text-[24px]' />
                            </div>
                            <div className='h-max w-max'>
                                <p className='text-[rgb(0,0,0)]'>43 Hideaway Work Space, 1 Empire Mews, London SW16 2BF</p>
                            </div>
                        </div>
                        <div className='h-max w-full flex items-center gap-5 py-2 sm:pl-10 pl-5'>
                            <div className='h-max w-max'>
                                <FaPhoneAlt className='text-[20px]' />
                            </div>
                            <div className='h-max w-max'>
                                <p className='text-[rgb(0,0,0)]'>+44 7709 637912 </p>
                            </div>
                        </div>
                    </div>
                    {/* Business Success Center */}

                    <div className='h-max w-full flex flex-col gap-1 px-5 border pt-5'>
                        <div className='h-max w-full bg-[rgb(242,242,242)] py-2 pl-3'>
                            <h1 className='text-[rgb(58,58,58)] text-[23px] font-bold'>Business Success Center</h1>
                        </div>
                        <div className='h-max w-full flex items-center gap-5 py-2 sm:pl-10 pl-5'>
                            <div className='h-max w-max'>
                                <MdLocationOn className='text-[1.5rem] h-full w-max' />
                            </div>
                            <div className='h-max w-max'>
                                <p className='text-[rgb(0,0,0)] break-words h-max m-0 p-0'>All-Rehman Arcade, Plot no 242, Block C Pia Housing Scheme, Lahore, Punjab 54770</p>
                            </div>
                        </div>
                        <div className='h-max w-full flex items-center gap-5 py-2 sm:pl-10 pl-5'>
                            <div className='h-max w-max'>
                                <FaPhoneAlt className='text-[20px]' />
                            </div>
                            <div className='h-max w-max'>
                                <p className='text-[rgb(0,0,0)]'>+92 317 4854894</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='h-max sm:w-[95%] w-[90%] bg-[rgb(249,249,249)] m-auto rounded-lg px-5 mb-10 pb-10'>
                    <h1 className='text-[rgb(255,0,0)] sm:text-4xl text-3xl font-bold md:text-center text-start  pt-5'>Why Choose Matrix Global Solutions</h1>
                    <p className='text-[rgb(51,51,51)] mt-5'>Maximize your savings by cutting operational costs by up to 50% without compromising on quality. Our expert team of seasoned professionals is dedicated to delivering top-tier service, ensuring that you receive the best possible outcomes. We leverage innovative solutions and cutting-edge technology to enhance both efficiency and service quality. With a client-first focus, your satisfaction is our top priority, and we work diligently to exceed your expectations. Trust in our reliable service to consistently deliver high-quality results every step of the way.</p>
                </div>

                <div className='h-max sm:w-[95%] w-[90%] border m-auto bg-[rgb(249,249,249)] rounded-lg pt-5 px-5 text-center'>
                    <h1 className='text-[rgb(255,0,0)] font-bold  md:text-center text-start sm:text-[30px] text-[26px]'>How We Launch Your Next High-Performing Back-Office Team in Less Than 30 days</h1>
                    <p className='text-[rgb(51,51,51)] text-start mt-5'>Every campaign is unique, and our onboarding process is designed to accommodate that diversity. We begin by considering critical factors such as IT infrastructure, HIPAA and PCI compliance, and communication channel setup. From implementing custom security protocols and designing bespoke PC configurations to testing team compatibility, we meticulously plan every aspect of your onboarding. Whether your campaign requires something as simple as virtual desktops and logins or a more complex solution like a secure on-premises server with nightly backups, our goal is to build a collaborative global team environment tailored to your specific needs.</p>

                    <div className='h-max w-full m-auto mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>

                        <div className='bg-[rgb(255,255,255)] border rounded-lg flex flex-col items-center py-7 shadow-md shadow-slate-500'>
                            <h1 className='text-[rgb(0,0,0)] font-bold text-[22px]'>Day 1-5</h1>
                            <ul className='text-[rgb(51,51,51)] text-center text-[18px] mt-2 flex flex-col gap-2'>
                                <li>Recruitment Starts</li>
                                <li>Agreement Signed</li>
                                <li>Screening</li>
                                <li>Testing</li>
                                <li>Background Checks</li>
                            </ul>
                        </div>
                        <div className='bg-[rgb(255,255,255)] border rounded-lg flex flex-col items-center py-7 shadow-md shadow-slate-500'>
                            <h1 className='text-[rgb(0,0,0)] font-bold text-[22px]'>Day 6-20</h1>
                            <ul className='text-[rgb(51,51,51)] text-center text-[18px] mt-2 flex flex-col gap-2'>
                                <li>Agents and Team</li>
                                <li>Leaders Acquired</li>
                            </ul>
                        </div>
                        <div className='bg-[rgb(255,255,255)] border rounded-lg flex flex-col items-center py-7 shadow-md shadow-slate-500'>
                            <h1 className='text-[rgb(0,0,0)] font-bold text-[22px]'>Day 25-30</h1>
                            <ul className='text-[rgb(51,51,51)] text-center text-[18px] mt-2 flex flex-col gap-2'>
                                <li>Training Begins</li>
                                <li>Nesting</li>
                                <li>Mentorship</li>
                                <li>Evaluation</li>
                            </ul>
                        </div>
                    </div>
                    <Link to={"/contact"}>
                        <button className='bg-[rgb(254,49,49)] text-white sm:px-10 px-0 sm:w-max w-[100%] sm:py-4 py-3 rounded-md text-[16px] font-medium duration-200  mt-12 z-50 relative group overflow-hidden mb-5'>Schedule a meeting with us today!
                            <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                        </button>
                    </Link>
                </div>

                {/* Contact Form */}

                <ContactForm />
                <FooterHome />




            </div >

        </>
    )
}

export default Legacy