import React from 'react'
import { Link } from 'react-router-dom'

const BusinessBenifits = () => {
    return (
        <>
            <div className='h-max w-full sm:pt-20 pt-12 '>
                <h1 className='sm:text-[36px] text-[27px] font-bold text-[rgb(15,23,42)] text-center w-[90%] m-auto'>Unlock Business Benefits with Matrix Global Solutions</h1>
                <p className='text-[rgb(58,58,63)] text-center mt-2'>Boost Efficiency and Cut Costs with Our Custom Outsourcing Solutions</p>

                <div className='sm:w-[95%] w-[90%] h-max m-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 mt-16'>
                    <div className='h-max w-full'>
                        <div className='h-[2px] w-14 bg-[rgb(221,24,59)]'></div>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)] mt-4'>Cost-Efficiency</h1>
                        <p className='mt-3 text-[rgb(58,58,63)]'>Maximize ROI and Minimize Costs with Our Strategic Outsourcing Solutions</p>
                    </div>
                    <div className='h-max w-full'>
                        <div className='h-[2px] w-14 bg-[rgb(221,24,59)]'></div>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)] mt-4'>Enhanced Productivity</h1>
                        <p className='mt-3 text-[rgb(58,58,63)]'>Enhance Efficiency and Productivity by Outsourcing Your Non-Core Tasks to Industry Experts</p>
                    </div>
                    <div className='h-max w-full'>
                        <div className='h-[2px] w-14 bg-[rgb(221,24,59)]'></div>
                        <h1 className='text-[24px] font-bold text-[rgb(15,23,42)] mt-4'>Specialized Expertise</h1>
                        <p className='mt-3 text-[rgb(58,58,63)]'>Enhance your business with expert insights and advanced technology to outpace the competition.</p>
                    </div>
                </div>

                <div className='h-max sm:w-[95%] w-[90%] bg-[rgb(221,24,59)] rounded-xl m-auto mt-20 flex flex-col items-center pt-12 pb-12 mb-12'>
                    <h1 className='text-white font-bold sm:text-[36px] text-[27px] text-center lg:w-[70%] md:w-[80%] w-[90%]'>Revolutionize your business operations with Matrix Global Solutions.</h1>
                    <Link to={"/contact"}>
                        <button className='bg-white text-[rgb(221,24,59)] font-medium py-3 sm:px-10 px-7 rounded-md hover:bg-black hover:text-white duration-150 mt-8'>EXPLORE NOW</button>
                    </Link>
                    <div className='h-[2px] w-14 bg-white mt-14'></div>
                    <p className='font-bold text-white mt-7'>OR CALL US AT:</p>
                    <p className='text-white text-[24px] font-medium mt-5'>+92 317 4854894</p>
                </div>
            </div>
        </>
    )
}

export default BusinessBenifits