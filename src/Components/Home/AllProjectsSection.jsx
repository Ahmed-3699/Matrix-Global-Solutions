import React from 'react'
import Ccaas from '../../Images/ccaas (2).jpg'
import home from '../../Images/Home Security 1 (2).jpeg'
import taxi from '../../Images/taxi.png'
import order from '../../Images/order-management-challenges.webp'
import offshore from '../../Images/offshore.jpeg'
import { Link } from 'react-router-dom'

const AllProjectsSection = () => {
    return (
        <>
            <div className='h-max w-full bg-[rgb(255,237,230)] sm:pt-24 pt-12 flex flex-col items-center'>
                <h1 className='sm:text-4xl text-[27px] font-bold text-center text-[rgb(15,23,42)]'>Custom Outsourcing Services for Your Business Success</h1>
                <p className='text-[rgb(58,58,58)] md:w-[60%] sm:w-[70%] w-[90%] text-center mt-6'>At Matrix Global Solutions, we provide a complete range of business process outsourcing services designed to help organizations of all sizes optimize operations, enhance productivity, and achieve lasting growth.</p>

                <div className='h-max sm:w-[95%] w-[90%] grid lg:grid-cols-2 grid-cols-1 sm:gap-16 gap-10 mt-14 sm:mb-20 mb-12 overflow-hidden'>

                    {/* Ccaas */}

                    <div data-aos="zoom-in-up" className='h-max w-full'>
                        <div className='sm:h-[350px] h-[300px] overflow-hidden rounded-lg'>
                            <img className='h-full w-full obj hover:scale-110 duration-500' src={Ccaas} alt="" />
                        </div>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)] mt-5'>Contact Center as a Service (CCaaS)</h1>
                        <p className='text-[rgb(58,58,58)] mt-4'>Matrix Global Solutions delivers a flexible, high-quality contact center solution customized to your business needs. We offer 24/7 customer support, ensuring prompt and professional service across multiple channels like phone, email, chat, and social media. Our team excels in using CRM tools to enhance customer satisfaction and retention, providing a seamless experience at every touchpoint.</p>
                        <Link to={"/contact-center-as-a-service"}>
                            <button className='px-8 py-3 border border-[rgb(15,23,42)] font-medium rounded-md mt-7 group relative overflow-hidden hover:border-[rgb(221,24,59)] hover:text-white z-50'>READ MORE
                                <div className='h-full w-0 group-hover:w-full bg-[rgb(254,49,49)] duration-200 absolute top-0 left-0 -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Offshore Talent Pool */}

                    <div data-aos="zoom-in-up" className='h-max w-full'>
                        <div className='sm:h-[350px] h-[300px] overflow-hidden rounded-lg'>
                            <img className='h-full w-full hover:scale-110 duration-500' src={offshore} alt="" />
                        </div>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)] mt-5'>Offshore Talent Pool</h1>
                        <p className='text-[rgb(58,58,58)] mt-4'>Unlock extraordinary growth with our global talent pool. Our offshore experts provide top-tier skills in creative services and back-office support. Leverage our cost-effective solutions to scale your operations, boost productivity, and tap into new markets. We manage order processing and fulfillment with meticulous attention, ensuring seamless execution and alignment with your strategic goals. Partner with us to overcome geographical limitations and propel your success.</p>
                        <Link to={"/offshore-talent-pool"}>
                            <button className='px-8 py-3 border border-[rgb(15,23,42)] font-medium rounded-md mt-7 group relative overflow-hidden hover:border-[rgb(221,24,59)] hover:text-white z-50'>READ MORE
                                <div className='h-full w-0 group-hover:w-full bg-[rgb(254,49,49)] duration-200 absolute top-0 left-0 -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Home Security */}

                    <div data-aos="zoom-in-up" className='h-max w-full'>
                        <div className='sm:h-[350px] h-[300px] overflow-hidden rounded-lg'>
                            <img className='h-full w-full hover:scale-110 duration-500 object-cover' src={home} alt="" />
                        </div>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)] mt-5'>Call Center Services for Home Security Solutions</h1>
                        <p className='text-[rgb(58,58,58)] mt-4'>At Matrix Global Solutions, we prioritize your home security business's safety and efficiency with our specialized offshore call center services. Our dedicated team excels in home security sales, delivering customized solutions to enhance customer safety and boost sales. We provide top-notch customer service, addressing inquiries and issues with empathy and expertise, fostering trust and loyalty. Our 24/7 camera monitoring ensures constant vigilance, detecting and responding to suspicious activity promptly. Choose us for cost-effective solutions, experienced professionals, advanced technology, and a customer-focused approach, all designed to meet your unique needs.</p>
                        <Link to={"/home-security"}>
                            <button className='px-8 py-3 border border-[rgb(15,23,42)] font-medium rounded-md mt-7 group relative overflow-hidden hover:border-[rgb(221,24,59)] hover:text-white z-50'>READ MORE
                                <div className='h-full w-0 group-hover:w-full bg-[rgb(254,49,49)] duration-200 absolute top-0 left-0 -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Taxi Dispatch Services */}

                    <div data-aos="zoom-in-up" className='h-max w-full'>
                        <div className='sm:h-[350px] h-[300px] overflow-hidden rounded-lg'>
                            <img className='h-full w-full hover:scale-110 duration-500' src={taxi} alt="" />
                        </div>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)] mt-5'>Taxi Dispatch Services</h1>
                        <p className='text-[rgb(58,58,58)] mt-4'>Matrix Global Solutions delivers a top-tier Taxi Dispatch Service, leveraging cutting-edge technology for seamless transportation management. Our offerings include the use of advanced platforms like iCabbi and AutoGhost to streamline dispatch operations, enhance driver performance, and elevate customer satisfaction. Our dedicated team provides 24/7 support, ensuring consistent, efficient service around the clock. With data-driven insights, we help you make strategic decisions to optimize service quality and operational efficiency. Choose us for significant cost savings, expert professionals, and a commitment to exceeding client expectations.</p>
                        <Link to={"/taxi-dispatch"}>
                            <button className='px-8 py-3 border border-[rgb(15,23,42)] font-medium rounded-md mt-7 group relative overflow-hidden hover:border-[rgb(221,24,59)] hover:text-white z-50'>READ MORE
                                <div className='h-full w-0 group-hover:w-full bg-[rgb(254,49,49)] duration-200 absolute top-0 left-0 -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Dispatch Order Management */}

                    <div data-aos="zoom-in-up" className='h-max w-full'>
                        <div className='sm:h-[350px] h-[300px] overflow-hidden rounded-lg'>
                            <img className='h-full w-full hover:scale-110 duration-500' src={order} alt="" />
                        </div>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)] mt-5'>Dispatch Order Management</h1>
                        <p className='text-[rgb(58,58,58)] mt-4'>Our Dispatch Order Management services are crafted to optimize your business operations and boost efficiency. We provide real-time tracking and updates, ensuring accurate deliveries and increased customer satisfaction. By leveraging advanced software solutions, we automate order management processes, reducing manual tasks and minimizing errors. Our approach includes developing customized solutions that align with your specific business needs, further enhancing operational effectiveness and service quality. Let us streamline your order management, so you can focus on growing your business.</p>
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

export default AllProjectsSection