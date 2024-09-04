import React from 'react'
import NavbarTaxi from '../Navbars/NavbarTaxi'
import { Link } from 'react-router-dom'

const TaxiDispatchMain = () => {
    return (
        <>
            <div className='h-max w-full z-50 relative'>
                <NavbarTaxi />

                <div className='taxi-main h-max w-full'>
                    <div className='h-full w-full sm:bg-[rgba(9,3,4,0.73)] bg-[rgba(9,3,4,0.60)] flex flex-col items-center sm:py-32 py-24 z-50'>
                        <h1 className='sm:text-5xl text-3xl font-bold text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%]'>Reliable Taxi Dispatch Services, 24/7 with Matrix Global Solutions</h1>
                        <p className='text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%] mt-8'>We offer cutting-edge taxi dispatch solutions designed to streamline operations and enhance customer satisfaction. Utilizing advanced platforms like Icabbi and Taxi Caller</p>
                        <Link to={"/contact"}>
                        <button className='bg-[rgb(254,49,49)] text-white px-8 py-4 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>SCHEDULE YOUR RIDE
                            <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxiDispatchMain