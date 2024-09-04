import React from 'react'
import icabbi from '../../Images/icabbiNew.jpg'
import taxiCaller from '../../Images/taxicaller.jpeg'
import tracking from '../../Images/Depositphotos_209735302_S.jpg'
import automatciDispatch from '../../Images/automatic dispatch.jpeg'
import customerSolution from '../../Images/custom-software-solutions.jpg'
import customerExp from '../../Images/CustomerExperience2.webp'
import Analytics from '../../Images/business-team-collaboration-discussing-work-analysis-with-financial-data-marketing-growth-report-2-scaled.webp'
import Scalable from '../../Images/CX-Framework-scaled-uai-2064x1161.jpg'
import { Link } from 'react-router-dom'

const TaxiAllFeatures = () => {
    return (
        <>
            <div className='h-max w-full bg-[rgb(255,237,230)] pt-24'>

                <div className='h-max sm:w-[95%] w-[90%] m-auto sm:pb-24 pb-14 grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-14'>

                    {/* Advanced Dispatch Solutions with I cabbi */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={icabbi} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Advanced Dispatch Solutions with I cabbi</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Harness the power of iCabbi’s state-of-the-art technology to streamline your taxi dispatch operations. Our service integrates real-time tracking, automated dispatch, and efficient routing to enhance service delivery and optimize fleet management. Experience reduced wait times and increased customer satisfaction with our seamless, user-friendly platform. Empower your drivers with the tools they need to navigate efficiently and deliver exceptional service. Transform your taxi business with advanced solutions designed to keep you ahead of the competition.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>EXPLORE ADVANCED DISPATCH
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Seamless Integration with Taxi Caller */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Seamless Integration with Taxi Caller</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Experience smooth and reliable taxi dispatch with Taxi Caller. Our integration allows for easy booking, automated notifications, and a user-friendly interface that ensures both drivers and passengers enjoy a hassle-free experience. Enhance your fleet’s efficiency with real-time tracking and intelligent routing. Benefit from robust reporting tools that provide valuable insights into your operations. Stay ahead of the competition with a system designed to adapt to your business needs.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>START SEAMLESS INTEGRATION
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110  duration-200' src={taxiCaller} alt="" />
                    </div>

                    {/* Real-Time Tracking and Fleet Management */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={tracking} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Real-Time Tracking and Fleet Management</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Stay ahead with real-time tracking and comprehensive fleet management tools. Our solutions provide live updates on vehicle locations, optimize routes, and improve overall efficiency, ensuring that your fleet operates at its best. With data-driven insights, you can make informed decisions to enhance performance and reduce operational costs. Our user-friendly dashboard gives you full control over your fleet, allowing for seamless management and monitoring. Elevate your service quality and customer satisfaction with proactive management and timely responses to changing conditions.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>ENABLE REAL-TIME TRACKING
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Automated Booking and Dispatch */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Automated Booking and Dispatch</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>
                            Streamline your booking process with our automated dispatch services. Leveraging advanced technology, we ensure quick and accurate dispatching, reducing wait times and improving overall customer satisfaction. Our system allows for easy booking through multiple channels, ensuring convenience for your customers. Benefit from automated notifications that keep both drivers and passengers informed at every step. Experience a smoother operation with analytics that help you refine your services and enhance your overall business performance.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>STREAMLINE YOUR BOOKING
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110  duration-200' src={automatciDispatch} alt="" />
                    </div>

                    {/* Customized Solutions for Your Business */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover duration-200' src={customerSolution} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Customized Solutions for Your Business</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>We understand that every business has unique needs. Our tailored dispatch solutions using iCabbi and Taxi Caller are designed to fit your specific requirements, providing a customized approach that enhances your operational efficiency. Our team of experts works closely with you to identify pain points and implement solutions that drive results. With flexible features and scalable options, our services grow alongside your business. Experience improved service delivery and increased profitability through a system built just for you.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>CUSTOMIZE YOUR SOLUTION
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Enhanced Customer Support and Experience */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Enhanced Customer Support and Experience</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Our taxi dispatch services prioritize exceptional customer support. With features like real-time notifications and efficient handling of customer inquiries, we ensure a superior experience for both drivers and passengers. Our dedicated support team is available around the clock to address any issues and provide assistance when needed. By fostering open communication, we build trust and satisfaction among users. Experience the difference with our commitment to quality service and continuous improvement in every aspect of your dispatch operations.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>GET EXCEPTIONAL SUPPORT
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover  duration-200' src={customerExp} alt="" />
                    </div>

                    {/* Data-Driven Insights and Analytics */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110  duration-200' src={Analytics} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Data-Driven Insights and Analytics</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Leverage data-driven insights to make informed decisions. Our services offer comprehensive analytics on dispatch performance, driver behavior, and customer preferences, helping you optimize operations and improve service quality. Utilize these insights to identify trends, enhance efficiency, and tailor your services to meet customer needs. With actionable reports at your fingertips, you can proactively address challenges and seize new opportunities. Elevate your business strategy and drive growth through a deeper understanding of your operations and customers.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>ACCESS DATA ANALYTICS
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Reliable and Scalable Solutions */}
                    <div data-aos="zoom-in-up" data-aos-duration="500" className='h-max'>
                        <h1 className='text-[rgb(15,23,42)] sm:text-[30px] text-[25px] font-extrabold'>Reliable and Scalable Solutions</h1>
                        <p className='text-[rgb(58,58,63)]  mt-4'>Whether you’re managing a small fleet or a large operation, our scalable dispatch solutions adapt to your needs. With robust support and flexible features, we ensure reliability and growth potential for your taxi business. Our systems are designed to easily integrate with your existing infrastructure, minimizing disruption during implementation. Enjoy the peace of mind that comes with knowing your operations can expand without the need for costly overhauls. Experience seamless upgrades and enhancements that keep you competitive in a dynamic market.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-3 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>EXPLORE SCALABLE SOLUTIONS
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-duration="500" className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden border shadow-sm shadow-black'>
                        <img className='h-full w-full hover:scale-110 object-cover  duration-200' src={Scalable} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxiAllFeatures