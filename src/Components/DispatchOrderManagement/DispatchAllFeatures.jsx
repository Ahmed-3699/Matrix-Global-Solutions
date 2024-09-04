import React from 'react'
import DeliveryQuality from '../../Images/Caviar_Delivery.jpg'
import RideSharing from '../../Images/uberpool-pr-photo.webp'
import FleetManagement from '../../Images/Fleet Management.jpeg'
import Restaurant from '../../Images/Order_Food.jpeg'
import Business from '../../Images/Business Development.jpeg'
import { Link } from 'react-router-dom'

const DispatchAllFeatures = () => {
    return (
        <>
            <div className='h-max w-full bg-[rgb(255,237,230)] pt-24'>

                <div className='h-max sm:w-[95%] w-[90%] m-auto sm:pb-24 pb-14 grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-14'>

                    {/* Our Food Dispatch Services */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={DeliveryQuality} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Delivering Quality & Efficiency: Our Food Dispatch Services</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Optimize your food delivery operations with Matrix Global’s specialized dispatch management services. We understand the unique challenges of the food delivery industry, from time-sensitive deliveries to maintaining food quality and safety. Our team of experts is dedicated to streamlining your dispatch processes, ensuring efficient routes, and enhancing customer satisfaction. Our dispatch food services leverage cutting-edge technology and industry best practices to create a seamless and reliable delivery experience. We handle everything from order intake and driver assignment to real-time tracking and communication, allowing you to focus on preparing delicious food and delighting your customers.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>ARRANGE A CONSULTATION
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Expert Taxi/Limousine Dispatch Services */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Elevate Your Ride-Sharing Operations with Expert Taxi/Limousine Dispatch Services</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Matrix Global Solutions understands the demands of the taxi and limousine industry, helping you optimize your dispatch operations for efficiency and customer satisfaction. Our specialized services leverage cutting-edge technology to ensure seamless passenger experiences and smooth workflows for drivers. We manage everything from booking and driver allocation to real-time tracking and communication, allowing you to focus on delivering exceptional service. Our commitment to continuous improvement keeps us ahead of industry trends, ensuring our solutions evolve with your needs. Partner with us to elevate your ride-sharing services and create positive experiences for both passengers and drivers.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>CONNECT WITH US NOW
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={RideSharing} alt="" />
                    </div>

                    {/* Fleet & Driver Management */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={FleetManagement} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Enhance Fleet & Driver Management for Optimal Performance</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Matrix Global Solutions empowers you to optimize your fleet and driver operations with our comprehensive management solutions. We understand the complexities of managing a diverse fleet, from scheduling and route optimization to maintenance and compliance. Our experts streamline your operations, enhancing efficiency for both drivers and customers. By leveraging cutting-edge technology and data analytics, we create a centralized platform for all your fleet needs. Our innovative solutions adapt to your evolving requirements, ensuring agile and effective management. Trust us to provide the insights necessary to elevate your operations and achieve peak performance.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>TALK ABOUT YOUR PROJECT
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Streamlined Restaurant Sign-Ups with Matrix Global Solutions */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Boost Your Visibility: Streamlined Restaurant Sign-Ups with Matrix Global Solutions</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Ready to attract new customers and grow your restaurant business? Matrix Global Solutions simplifies the restaurant sign-up process, making it easier than ever to onboard new partners and expand your delivery network. We manage everything from initial contact and application processing to onboarding and ongoing support, allowing you to focus on what you do best—creating delicious food. Our dedicated team is committed to providing a smooth and efficient sign-up experience for restaurants, ensuring seamless integration into your delivery platform. By leveraging technology and streamlined processes, we expedite the onboarding process, enabling you to welcome new restaurants quickly and efficiently.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>ENHANCE YOUR RESTAURANT NETWORK
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={Restaurant} alt="" />
                    </div>

                    {/* Business Development Solutions */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={Business} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Drive Your Growth: Business Development Solutions Crafted for Your Success</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Matrix Global Solutions provides strategic business development services designed to help your company reach new heights. We understand the importance of identifying new opportunities, building strong partnerships, and driving sustainable growth. Our team of experienced business development professionals is dedicated to helping you achieve your strategic goals. We leverage our industry expertise, market insights, and proven methodologies to develop customized strategies that align with your unique business objectives. From market research and competitor analysis to lead generation and partnership development, we provide the support you need to expand your reach, build brand awareness, and drive revenue growth.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>GET IN TOUCH TODAY
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DispatchAllFeatures