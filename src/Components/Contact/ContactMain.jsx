import React from 'react'
import NavbarContact from '../Navbars/NavbarContact'

const ContactMain = () => {
  return (
    <>
    <div className='h-max w-full bg-white pb-24 relative z-50'>
        <NavbarContact />

        <div className='contact-main h-[60vh] w-full overflow-hidden'>
            <div className='bg-[rgba(9,3,4,0.69)] h-full w-full pt-28 overflow-hidden'>
                <h1 className='text-white sm:text-5xl text-4xl font-bold text-center'>Connect with Us</h1>
                <p className='text-white text-center mt-7 m-auto w-[90%]'>Contact Us Anytime. We're Here to Help and Answer Your Questions.</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default ContactMain