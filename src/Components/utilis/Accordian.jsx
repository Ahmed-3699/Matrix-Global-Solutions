import React from 'react'
import { Accordion } from "flowbite-react";

const Accordian = () => {
    return (
        <>
            <Accordion collapseAll className='mt-2 gap-2 duration-200 border overflow-hidden'>
                <Accordion.Panel className='duration-200'>
                    <Accordion.Title className='bg-white duration-200 hover:bg-white text-lg text-[rgb(15,23,42)] font-semibold'>How can I request a quote for your services?</Accordion.Title>
                    <Accordion.Content className='bg-white duration-200'>
                        <p className="mb-2 text-[rgb(15,23,42)] dark:text-gray-400">
                            You can request a quote by filling out the contact form on our website, sending us an email, or giving us a call. We’ll provide you with a detailed quote based on your requirements.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-white hover:bg-white text-[rgb(15,23,42)] font-semibold text-lg'>What are your business hours?</Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-[rgb(15,23,42)] dark:text-gray-400">
                            Our services are available 24 hours a day, 7 days a week, 365 days a year. We pride ourselves on being always accessible to our clients, regardless of their time zone. Our dedicated team ensures round-the-clock availability, providing seamless support and responsiveness whenever you need us.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-white hover:bg-white text-lg text-[rgb(15,23,42)] font-semibold'>Do you offer customized solutions for unique projects?</Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-[rgb(15,23,42)] dark:text-gray-400">
                            Absolutely! We specialize in tailoring our services to meet the unique needs of each project. Whether you have specific requirements or a creative idea, we’re here to work closely with you and develop a customized solution that fits your vision.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel className='duration-200'>
                    <Accordion.Title className='bg-white hover:bg-white text-lg text-[rgb(15,23,42)] font-semibold'>What is your response time for inquiries?</Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-[rgb(15,23,42)] dark:text-gray-400">
                        We are committed to prompt responses. You can expect to hear from us within 24-48 hours of submitting your inquiry. If your request is time-sensitive or urgent, please let us know, and we’ll prioritize it accordingly.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>

        </>
    )
}

export default Accordian

