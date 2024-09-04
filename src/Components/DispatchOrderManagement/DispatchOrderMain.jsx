import React from 'react'
import NavbarDispatch from '../Navbars/NavbarDispatch'
import { Link } from 'react-router-dom'

const DispatchOrderMain = () => {
    return (
        <>
            <div className='h-max w-full z-50 relative'>
                <NavbarDispatch />
                <div className='dispatch-order-main h-max w-full'>
                    <div className='h-full w-full sm:bg-[rgba(9,3,4,0.73)] bg-[rgba(9,3,4,0.60)] flex flex-col items-center sm:py-32 py-24 z-50'>
                        <h1 className='sm:text-5xl text-3xl font-bold text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%]'>Optimize Your DispatchStream with Matrix Global Solutions</h1>
                        <p className='text-white text-center lg:w-[55%] md:w-[70%] sm:w-[80%] w-[90%] mt-8'>Take control of your logistics and delivery operations with our advanced dispatch management services. Experience unparalleled efficiency and real-time tracking to elevate your business performance.</p>
                        <Link to={"/contact"}>
                            <button className='bg-[rgb(254,49,49)] text-white px-8 py-4 rounded-md text-[16px] font-medium  mt-7 z-50 relative group overflow-hidden'>INITIATE YOUR SUCCESS TODAY
                                <div className='h-full w-0 absolute top-0 left-0 group-hover:w-full duration-200 bg-[rgb(198,33,33)] -z-50'></div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DispatchOrderMain