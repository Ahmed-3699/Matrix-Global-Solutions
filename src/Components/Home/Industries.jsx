import React from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

const Industries = () => {
  return (
    <>
    <div className='h-max w-full bg-[rgb(255,237,230)] sm:pt-24 pt-10 sm:pb-24 pb-12'>
        <h1 className='sm:text-[36px] text-[27px] font-bold md:w-[85%] w-[90%] text-center m-auto text-[rgb(15,23,42)]'>Transforming Various Industries with Customized Outsourcing Solutions</h1>

        <div className='h-max sm:w-[95%] w-[90%] m-auto mt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>

            <div className='h-max bg-white rounded-lg px-8 py-10'>
                <div className='h-10 w-10 rounded-full bg-[rgb(255,237,230)] flex justify-center items-center'>
                <FaPizzaSlice className='text-[18px]' />
                </div>
                <p className='text-[20px] font-bold text-[rgb(15,23,42)] mt-4'>Food Delivery</p>
                <p className='text-[rgb(58,58,58)] mt-5'>Elevate your food delivery business with our comprehensive solutions. From seamless order management and driver coordination to top-notch customer support and insightful analytics, we empower you to grow and exceed customer expectations.</p>
            </div>
            <div className='h-max bg-white rounded-lg px-8 pt-10 pb-16'>
                <div className='h-10 w-10 rounded-full bg-[rgb(255,237,230)] flex justify-center items-center'>
                <FaTruck  className='text-[18px]' />
                </div>
                <p className='text-[20px] font-bold text-[rgb(15,23,42)] mt-4'>Transportation</p>
                <p className='text-[rgb(58,58,58)] mt-5'>Maximize your transportation business's potential with our all-inclusive services. We specialize in reservation management, customer support, and performance enhancement to fuel your growth.</p>
            </div>
            <div className='h-max bg-white rounded-lg px-8 pt-10 pb-[34px]'>
                <div className='h-10 w-10 rounded-full bg-[rgb(255,237,230)] flex justify-center items-center'>
                <FaTaxi className='text-[18px]' />
                </div>
                <p className='text-[20px] font-bold text-[rgb(15,23,42)] mt-4'>Taxi & Executive Limousine Services</p>
                <p className='text-[rgb(58,58,58)] mt-5'>Enhance your taxi and limousine services with our customized solutions. We focus on optimizing dispatch, reservation systems, and customer interaction to ensure flawless transportation experiences.</p>
            </div>
            <div className='h-max bg-white rounded-lg px-8 pt-10 pb-16'>
                <div className='h-10 w-10 rounded-full bg-[rgb(255,237,230)] flex justify-center items-center'>
                <FaTruckFast className='text-[18px]' />
                </div>
                <p className='text-[20px] font-bold text-[rgb(15,23,42)] mt-4'>Dispatch and Order Management</p>
                <p className='text-[rgb(58,58,58)] mt-5'>Streamline your dispatch and order management with our data-driven solutions. We assist in optimizing route planning, maximizing fleet efficiency, and delivering outstanding customer service to your clients</p>
            </div>
            <div className='h-max bg-white rounded-lg px-8 pt-10 pb-16'>
                <div className='h-10 w-10 rounded-full bg-[rgb(255,237,230)] flex justify-center items-center'>
                <FaEnvelope  className='text-[18px]' />
                </div>
                <p className='text-[20px] font-bold text-[rgb(15,23,42)] mt-4'>Parcel & Delivery Services</p>
                <p className='text-[rgb(58,58,58)] mt-5'>Enhance Your Parcel & Delivery Services with Our Advanced Solutions. We streamline your delivery processes, improve customer communication, and provide actionable insights to propel your business forward.</p>
            </div>
            <div className='h-max bg-white rounded-lg px-8 py-10'>
                <div className='h-10 w-10 rounded-full bg-[rgb(255,237,230)] flex justify-center items-center'>
                <IoMdLock className='text-[18px]' />
                </div>
                <p className='text-[20px] font-bold text-[rgb(15,23,42)] mt-4'>Residential Security Solutions</p>
                <p className='text-[rgb(58,58,58)] mt-5'>Safeguard your home with our advanced Residential Security Solutions, featuring cutting-edge surveillance systems, smart home integration, and 24/7 monitoring. Our experts tailor security plans to ensure complete peace of mind and protection.</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Industries