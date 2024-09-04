import React from 'react'
import cloud from '../../Images/cloud image.webp'
import customer from '../../Images/multichannel-support.jpeg'
import email from '../../Images/email support.jpg'
import liveChat from '../../Images/live chat.jpg'
import omni from '../../Images/Omnichannel-scaled.jpg'
import { Link } from 'react-router-dom'

const CenterAllFeautures = () => {
    return (
        <>
            <div className='h-max w-full bg-[rgb(255,237,230)] pt-24 overflow-hidden'>

                <div className='h-max sm:w-[95%] w-[90%] m-auto sm:pb-24 pb-14 grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-14'>

                    {/* Cloud Contact Center */}
                    <div data-aos="fade-up-right" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={cloud} alt="" />
                    </div>
                    <div data-aos="fade-up-left" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Unlock the Power of Cloud-Based Contact Center Solutions</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>As industries continue to evolve, the need for agile, scalable, and technologically advanced contact center solutions has never been more pressing. Our cloud-based, omnichannel platform seamlessly integrates with your existing systems, enabling you to manage customer interactions through a unified, intuitive interface. Leveraging cutting-edge technologies, such as artificial intelligence, machine learning, and advanced analytics, we’ll help you optimize agent performance, streamline workflows, and provide your customers with personalized, responsive support across voice, email, chat, social media, and more.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>Enhance Your Customer Experience
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Customer Experience */}
                    <div data-aos="fade-up-right" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Transforming Customer Support Experiences through Outsourcing Excellence</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>In today’s dynamic, fast-paced business environment, delivering exceptional, personalized customer care is essential for driving user engagement, brand loyalty, and long-term growth. However, maintaining a high-performing, in-house contact center can be a significant operational and financial challenge, diverting your valuable resources away from core product development and innovation. Leveraging our robust, cloud-based contact center infrastructure, advanced analytics, and proven best practices, we’ll help you streamline your support workflows, enhance first-contact resolution rates, and deliver personalized, consultative care that exceeds your customers’ expectations.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>Discover Today
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>
                    <div data-aos="fade-up-left" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={customer} alt="" />
                    </div>

                    {/* Email Support */}
                    <div data-aos="fade-up-right" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={email} alt="" />
                    </div>
                    <div data-aos="fade-up-left" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Streamlined Email Support for Unmatched Customer Satisfaction</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Providing responsive, efficient, and personalized email support is essential for driving customer satisfaction, reducing churn, and fostering long-term brand loyalty. However, managing high-volume, multilingual email inquiries can be a significant operational challenge, often pulling your resources away from key business priorities. With our advanced, cloud-based contact center infrastructure, intelligent automation, and data-driven insights, we’ll help you optimize your email support processes, improve first-contact resolution rates, and deliver tailored, consultative responses that consistently exceed customer expectations.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>Discover Today
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Customer Chat Support */}
                    <div data-aos="fade-up-right" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Maximize Your Business ROI with Expert Chat Support Services</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>In today’s rapidly evolving business landscape, customers expect immediate and personalized support to meet their needs. Delivering responsive and empathetic chat assistance is vital for enhancing customer satisfaction, minimizing churn, and cultivating lasting brand loyalty. However, handling high volumes of real-time chat inquiries can pose significant operational challenges, often diverting essential resources from core product development and innovation. By leveraging our robust cloud-based contact center infrastructure, intelligent automation, and data-driven analytics, we will help you optimize your chat support processes, improve first-contact resolution rates, and provide personalized, consultative interactions that consistently exceed customer expectations.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>Enhance Your Chat Support Experience
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    <div data-aos="fade-up-left" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={liveChat} alt="" />
                    </div>

                    {/* Dispatch Order Management */}
                    <div data-aos="fade-up-right" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={omni} alt="" />
                    </div>
                    <div data-aos="fade-up-left" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Orchestrating Seamless Customer Experiences Through Matrix Global Solutions' Omnichannel Support</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Customers expect a consistent, personalized experience across all touchpoints—from voice and email to chat and social media. Delivering responsive, efficient, and integrated omnichannel support is essential for enhancing customer satisfaction, minimizing churn, and fostering long-term brand loyalty. However, managing high volumes of multi-channel inquiries can present significant operational challenges, often diverting valuable resources from core product development and innovation. Unlock the transformative potential of outsourced omnichannel support, allowing your internal teams to concentrate on strategic business initiatives and drive sustainable growth in a competitive marketplace.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>Elevate Your Business
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CenterAllFeautures