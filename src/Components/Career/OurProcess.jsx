import React from 'react'
import teamWork from '../../Images/teamwork-skills-1024x670.jpeg.webp'
import employ from '../../Images/best-employee-benefits-jobs-career-workplace-insurance-retirement-pension.jpg'
import recruitment from "../../Images/innovative-recruitment-methods-finance-accounting.jpg"
import { Link } from 'react-router-dom'

const OurProcess = () => {
    return (
        <>
            <div className='h-max bg-white w-full lg:pt-28 pt-14'>

                <div className='sm:w-[95%] w-[90%] m-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 mb-12'>

                    <div data-aos="zoom-in-up" data-aos-duration="500"  className='sm:h-[400px] h-[250px] w-full border rounded-xl overflow-hidden'>
                        <img className='h-full w-full hover:scale-110 duration-200' src={teamWork} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500"  className='h-max w-full lg:pt-20 pt-0'>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)]'>Are you passionate, driven, and ready to collaborate?</h1>
                        <p className='text-[rgb(58,58,58)] mt-5'>At Matrix Global Solutions, our team is a dynamic blend of inquisitiveness and creativity, driven by a shared ambition. Our diverse talents unite, building strong relationships as we work together to achieve our common goals.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-10 py-3 rounded-md text-[16px] font-medium  mt-5 z-50 relative group overflow-hidden'>JOIN US
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>

                    {/* Employe Perks */}
                    <div data-aos="zoom-in-up" data-aos-duration="500"  className='h-max w-full'>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)]'>Join Us and Enjoy Exceptional Perks!</h1>
                        <p className='text-[rgb(58,58,58)] mt-5'>At Matrix Global Solutions, we’re committed to keeping our team motivated and fulfilled. Here’s a glimpse of what you’ll enjoy with us:</p>
                        <ul className='text-[rgb(58,58,58)] mt-3 flex flex-col gap-1'>
                            <li>– Competitive Salary</li>
                            <li>– Performance-Based Increments</li>
                            <li>– Collaborative Work Culture</li>
                            <li>– Annual Team Events</li>
                            <li>– Exciting Company Retreats</li>
                            <li>– Professional Development Budgets</li>
                            <li>– Generous Paid Time Off</li>
                            <li>– Celebratory Office Gatherings</li>
                        </ul>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-10 py-3 rounded-md text-[16px] font-medium  mt-5 z-50 relative group overflow-hidden'>EXPLORE NOW
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500"  className='sm:h-[400px] h-[250px] w-full border rounded-xl overflow-hidden'>
                        <img className='h-full w-full hover:scale-110 duration-200' src={employ} alt="" />
                    </div>

                    {/* Recruitment */}
                    <div data-aos="zoom-in-up" data-aos-duration="500"  className='sm:h-[400px] h-[250px] w-full rounded-xl overflow-hidden'>
                        <img className='h-full w-full hover:scale-110 duration-200' src={recruitment} alt="" />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500"  className='h-max w-full'>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)]'>Our Recruitment Process</h1>
                        <p className='text-[rgb(58,58,58)] font-bold italic mt-2'>1. Initial Review</p>
                        <p className='text-[rgb(58,58,58)]'>If your application catches our eye, we'll reach out for a call. This is a chance for us to get to know each other and discuss your background.</p>
                        <p className='text-[rgb(58,58,58)] font-bold italic'>2. Interview</p>
                        <p className='text-[rgb(58,58,58)]'>We dive into your experiences, past projects, and the unique skills you bring to the team. This is where we explore how well your expertise aligns with our needs.</p>
                        <p className='text-[rgb(58,58,58)] font-bold italic'>3. Skills Assessment</p>
                        <p className='text-[rgb(58,58,58)]'>To ensure a perfect match, we’ll assess your skills relevant to the role. This step helps us gauge your technical proficiency and problem-solving abilities.</p>
                        <p className='text-[rgb(58,58,58)] font-bold italic'>4. Job Offer</p>
                        <p className='text-[rgb(58,58,58)]'>If you’re the ideal candidate, our HR team will extend an offer that aligns with your qualifications and aspirations. We look forward to potentially welcoming you to our team!</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurProcess