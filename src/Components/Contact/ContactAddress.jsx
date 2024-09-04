import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ContactForm from '../utilis/ContactForAddress'

const ContactAddress = () => {
    return (
        <>

            <div className='h-max w-full'>

                <div className='h-max sm:w-[95%] grid md:grid-cols-2 grid-cols-1 w-[90%] m-auto lg:mb-24 mb-16 gap-12'>

                    <div className='h-max w-full'>
                        <h1 className='sm:text-4xl text-[27px] text-[rgb(15,23,42)] font-bold'>Contact Us</h1>
                        <p className='text-[rgb(58,58,58)] mt-6'>Access Our Contact Details and Connect with Our Team for Any Assistance or Inquiries.</p>

                        <div className='h-max w-full py-6 border-b mt-10'>
                            <div className='flex h-max items-start gap-2'>
                                <div className='h-max w-max'>
                                    <MdLocationOn className='text-[rgb(15,23,42)] text-[25px]' />
                                </div>
                                <div className='h-max w-max'>
                                    <p className='text-[rgb(15,23,42)] font-medium'>ADDRESS</p>
                                </div>
                            </div>
                            <p className='text-[rgb(58,58,58)] mt-2'>All-Rehman Arcade, Plot no 242, Block C Pia Housing Scheme, Lahore, Punjab 54770</p>
                        </div>
                        <div className='h-max w-full py-6 border-b'>
                            <div className='flex h-max items-center gap-2'>
                                <div className='h-max w-max'>
                                    <FaPhoneAlt className='text-[rgb(15,23,42)] text-[20px]' />
                                </div>
                                <div className='h-max w-max'>
                                    <p className='text-[rgb(15,23,42)] font-medium'>PHONE</p>
                                </div>
                            </div>
                            <a href="https://wa.me/03174854894" target="_blank" rel="noopener noreferrer">
                                <p className='text-[rgb(254,49,49)] cursor-pointer mt-2'>+92 317 4854894</p>
                            </a>
                        </div>
                        <div className='h-max w-full py-6 border-b'>
                            <div className='flex h-max items-center gap-2'>
                                <div className='h-max w-max'>
                                    <FaEnvelope className='text-[rgb(15,23,42)] text-[20px]' />
                                </div>
                                <div className='h-max w-max'>
                                    <p className='text-[rgb(15,23,42)] font-medium'>EMAIL</p>
                                </div>
                            </div>
                            <a href="mailto:matrixglobalsolutions@gmail.com" target="_blank" rel="noopener noreferrer">
                                <p className='text-[rgb(254,49,49)] cursor-pointer mt-2'>matrixglobal7860@gmail.com</p>
                            </a>
                        </div>
                    </div>

                    {/* COntact form */}

                    <div className='h-max w-full'>
                        <ContactForm />
                    </div>
                </div>

                <div className='h-max sm:w-[95%] w-[90%] m-auto'>
                    <div style={{ width: '100%', marginTop: "20px" }}><iframe width="100%" height="300px" frameborder='"0"' scrolling='"no"' marginheight='"0"' marginwidth='"0"' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pia%20road%20Al-Rehman%20Arcade%20johar%20town%20laore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
                </div>

                <div className='h-max sm:w-[95%] w-[90%] m-auto mt-5 border grid lg:grid-cols-2 grid-cols-1 mb-10'>
                    {/* Head Office */}

                    <div className='h-max w-full flex flex-col gap-1 border px-5 pt-5 pb-6'>
                        <div className='h-max w-full bg-[rgb(242,242,242)] py-2 pl-3'>
                            <h1 className='text-[rgb(58,58,58)] text-[23px] font-bold'>Head Office</h1>
                        </div>
                        <div className='h-max w-full flex items-center gap-5 py-2 sm:pl-10 pl-5'>
                            <div className='h-max w-max'>
                                <MdLocationOn className='text-[24px]' />
                            </div>
                            <div className='h-max w-max'>
                                <p className='text-[rgb(0,0,0)]'>43 Hideaway Work Space, 1 Empire Mews, London SW16 2BF</p>
                            </div>
                        </div>
                        <div className='h-max w-full flex items-center gap-5 py-2 sm:pl-10 pl-5'>
                            <div className='h-max w-max'>
                                <FaPhoneAlt className='text-[20px]' />
                            </div>
                            <div className='h-max w-max'>
                                <p className='text-[rgb(0,0,0)]'>+44 7709 637912 </p>
                            </div>
                        </div>
                    </div>
                    {/* Business Success Center */}

                    <div className='h-max w-full flex flex-col gap-1 px-5 border pt-5'>
                        <div className='h-max w-full bg-[rgb(242,242,242)] py-2 pl-3'>
                            <h1 className='text-[rgb(58,58,58)] text-[23px] font-bold'>Business Success Center</h1>
                        </div>
                        <div className='h-max w-full flex items-center gap-5 py-2 sm:pl-10 pl-5'>
                            <div className='h-max w-max'>
                                <MdLocationOn className='text-[1.5rem] h-full w-max' />
                            </div>
                            <div className='h-max w-max'>
                                <p className='text-[rgb(0,0,0)] break-words h-max m-0 p-0'>All-Rehman Arcade, Plot no 242, Block C Pia Housing Scheme, Lahore, Punjab 54770</p>
                            </div>
                        </div>
                        <div className='h-max w-full flex items-center gap-5 py-2 sm:pl-10 pl-5'>
                            <div className='h-max w-max'>
                                <FaPhoneAlt className='text-[20px]' />
                            </div>
                            <div className='h-max w-max'>
                                <p className='text-[rgb(0,0,0)]'>+92 317 4854894</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ContactAddress