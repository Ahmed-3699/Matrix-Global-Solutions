import React from 'react'
import ccaas from '../../Images/ccaas.jpg'
import offshore from '../../Images/1_FZq4Diic0YzW7b0TgZv5SQ.jpg'
import home from '../../Images/Home Security 1 (1).jpeg'
import taxi from '../../Images/1_hYg4tYYEoTwv-PJ20rV3ig.jpg'
import dispatch from '../../Images/delivery on demand.webp'
import { Link } from 'react-router-dom'

const AllProjects = () => {
    
    return (
        <>
            <div className='h-max w-full bg-[rgb(255,237,230)] pt-24'>

                <div className='h-max sm:w-[95%] w-[90%] m-auto sm:pb-24 pb-14 grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-14'>

                    {/* Ccaas */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[300px] w-full rounded-xl overflow-hidden'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={ccaas} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <p className='text-[rgb(221,24,109)] font-medium'>01</p>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[32px] text-[25px] font-extrabold mt-3'>Contact Center as a Service (CCaaS)</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Enhance customer engagement with our cutting-edge CCaaS solutions. Our platform empowers you with skilled agents, seamless omnichannel integration, and advanced tools to elevate every interaction. From voice to social media, deliver personalized experiences that foster loyalty and drive success. Unlock real-time insights and continuous optimization to boost customer satisfaction, strengthen your brand, and achieve measurable results.</p>
                        <Link to={"/contact-center-as-a-service"}>
                        <button className='px-8 py-3 border border-[rgb(15,23,42)] font-medium rounded-md mt-7 group relative overflow-hidden hover:border-[rgb(221,24,59)] hover:text-white z-50'>READ MORE
                            <div className='h-full w-0 group-hover:w-full bg-[rgb(254,49,49)] duration-200 absolute top-0 left-0 -z-50'></div>
                        </button>
                        </Link>
                    </div>

                    {/* Offshore Talent Pool */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <p className='text-[rgb(221,24,109)] font-medium'>02</p>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[32px] text-[25px] font-extrabold mt-3'>Offshore Talent Pool</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Unlock global expertise to drive your business forward. Our offshore talent pool offers top-tier skills across software development, data analytics, creative services, and more. Scale efficiently, enhance productivity, and seize new opportunities with our cost-effective, geographically diverse resources. Let us manage the logistics while you focus on achieving exceptional results that align with your strategic goals</p>
                        <Link to={"/offshore-talent-pool"}>
                        <button className='px-8 py-3 border border-[rgb(15,23,42)] font-medium rounded-md mt-7 group relative overflow-hidden hover:border-[rgb(221,24,59)] hover:text-white z-50'>READ MORE
                            <div className='h-full w-0 group-hover:w-full bg-[rgb(254,49,49)] duration-200 absolute top-0 left-0 -z-50'></div>
                        </button>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[300px] w-full rounded-xl overflow-hidden border'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={offshore} alt="" />
                    </div>

                    {/* Home Security */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[300px] w-full rounded-xl overflow-hidden'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={home} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <p className='text-[rgb(221,24,109)] font-medium'>03</p>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[32px] text-[25px] font-extrabold mt-3'>Call Center Services for Home Security Solutions</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>At Matrix Global Solutions, we specialize in offshore call center services for home security businesses. Our expert team enhances customer safety, boosts sales, and delivers exceptional service with empathy and efficiency. With 24/7 camera monitoring, we ensure constant vigilance and prompt response to any suspicious activity. Choose us for cost-effective, technology-driven solutions tailored to your needs.</p>
                        <Link to={"/home-security"}>
                        <button className='px-8 py-3 border border-[rgb(15,23,42)] font-medium rounded-md mt-7 group relative overflow-hidden hover:border-[rgb(221,24,59)] hover:text-white z-50'>READ MORE
                            <div className='h-full w-0 group-hover:w-full bg-[rgb(254,49,49)] duration-200 absolute top-0 left-0 -z-50'></div>
                        </button>
                        </Link>
                    </div>

                    {/* Taxi Dispatch Services */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <p className='text-[rgb(221,24,109)] font-medium'>04</p>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[32px] text-[25px] font-extrabold mt-3'>Taxi Dispatch Services</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Matrix Global Solutions offers premium Taxi Dispatch Services powered by advanced platforms like iCabbi and AutoGhost. We ensure smooth dispatch operations and enhanced driver performance with our 24/7 support team. Our data-driven approach helps optimize service quality and operational efficiency. Choose us for cost-effective solutions, expert support, and unmatched customer satisfaction.</p>
                       <Link to={"/taxi-dispatch"}>
                        <button className='px-8 py-3 border border-[rgb(15,23,42)] font-medium rounded-md mt-7 group relative overflow-hidden hover:border-[rgb(221,24,59)] hover:text-white z-50'>READ MORE
                            <div className='h-full w-0 group-hover:w-full bg-[rgb(254,49,49)] duration-200 absolute top-0 left-0 -z-50'></div>
                        </button>
                       </Link>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[300px] w-full rounded-xl overflow-hidden border'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={taxi} alt="" />
                    </div>

                    {/* Dispatch Order Management */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[300px] w-full rounded-xl overflow-hidden border'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={dispatch} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <p className='text-[rgb(221,24,109)] font-medium'>05</p>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[32px] text-[25px] font-extrabold mt-3'>Dispatch Order Management</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Our Dispatch Order Management services enhance efficiency with real-time tracking and updates, ensuring precise deliveries and higher customer satisfaction. We utilize advanced software to automate and streamline order processes, cutting down on manual tasks and errors. Tailored to your unique business needs, our solutions boost operational effectiveness and service quality. Partner with us to simplify your order management and concentrate on scaling your business.</p>
                       <Link to={"/dispatch-order-management"}>
                        <button className='px-8 py-3 border border-[rgb(15,23,42)] font-medium rounded-md mt-7 group relative overflow-hidden hover:border-[rgb(221,24,59)] hover:text-white z-50'>READ MORE
                            <div className='h-full w-0 group-hover:w-full bg-[rgb(254,49,49)] duration-200 absolute top-0 left-0 -z-50'></div>
                        </button>
                       </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AllProjects