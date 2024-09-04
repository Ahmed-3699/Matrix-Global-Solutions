import React from 'react'
import { IoMdStar } from "react-icons/io";
import client1 from '../../Images/testimonial-skip-09.jpg'
import client2 from '../../Images/testimonial-skip-02.jpg'
import client3 from '../../Images/testimonial-skip-07.jpg'

const Testimonials = () => {
  return (
    <>
    <div className='h-max w-full sm:pt-24 pt-10 sm:pb-24 pb-12 flex flex-col items-center'>
        <p data-aos="fade-up" className='text-[rgb(15,23,42)] text-[17px]'>TESTIMONIALS</p>
        <h1 data-aos="fade-up" className='text-[rgb(15,23,42)] sm:text-[36px] text-[27px] font-bold mt-3 w-[90%] text-center'>What Our Customers Say</h1>
        <p data-aos="fade-up" className='text-[rgb(58,58,58)] md:w-[70%] sm:w-[80%] w-[90%] text-center mt-4'>At Matrix Global Solutions, we are proud of the trust and satisfaction we've built with our diverse clients. Our dedication to exceptional results has garnered recognition and endorsement from leading industry experts.</p>

        <div className='h-max sm:w-[95%] w-[90%] mt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>

            <div className='h-max border py-10 px-10'>
                <div className='h-max w-max flex text-[rgb(240,173,78)] m-auto text-[18px]'>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                </div>
                <p className='text-center text-[rgb(58,58,58)] mt-6'>Outstanding service! This company consistently exceeds expectations to meet their customers’ needs. I'm thoroughly impressed with the results.</p>
                <div className='h-14 w-14 rounded-full overflow-hidden m-auto mt-5'>
                    <img src={client1} alt="" />
                </div>
                <p className='text-center mt-2 font-medium'>Noah Wilson</p>
            </div>
            <div className='h-max border py-10 px-10'>
                <div className='h-max w-max flex text-[rgb(240,173,78)] m-auto text-[18px]'>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                </div>
                <p className='text-center text-[rgb(58,58,58)] mt-6'>Exceptional quality and professionalism. As a loyal customer for years, I've consistently been impressed and never disappointed.</p>
                <div className='h-14 w-14 rounded-full overflow-hidden m-auto mt-5'>
                    <img src={client2} alt="" />
                </div>
                <p className='text-center mt-2 font-medium'>Liam Patel</p>
            </div>
            <div className='h-max border py-10 px-10'>
                <div className='h-max w-max flex text-[rgb(240,173,78)] m-auto text-[18px]'>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                </div>
                <p className='text-center text-[rgb(58,58,58)] mt-6'>Dependable and trustworthy. I highly recommend this business to anyone seeking outstanding top-quality products and services.</p>
                <div className='h-14 w-14 rounded-full overflow-hidden m-auto mt-5'>
                    <img src={client3} alt="" />
                </div>
                <p className='text-center mt-2 font-medium'>Olivia Martinez</p>
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Testimonials