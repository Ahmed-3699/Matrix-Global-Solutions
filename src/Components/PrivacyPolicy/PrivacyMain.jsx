import React, { useEffect } from 'react'
import NavbarContact from '../Navbars/NavbarContact'

const PrivacyMain = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className='h-max w-full bg-white'>

                <NavbarContact />

                <div className='h-max w-[90%] m-auto shadow-md shadow-black px-6 py-8 rounded-lg mb-12 text-wrap'>
                    <h1 className='text-[rgb(15,23,42)] sm:text-3xl text-[27px] text-center font-bold'>Matrix Global Solutions Privacy Policy</h1>
                    <p className='text-[rgb(102,102,127)] text-center mt-6'>Last Updated: August 25, 2024</p>
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-7 font-serif text-wrap'>This Privacy Policy describes how Matrix Global Solutions collects, uses, discloses, and protects your personal information when you visit our website <a className='text-wrap' href="/" target='_blank'><span className='text-[rgb(0,123,255)] font-bold sm:text-2xl text-[20px] hover:underline cursor-pointer break-words'>www.matrixglobalsolutions.com</span></a> (the “Site”) or interact with our services.</h1>

                    {/* 1. Information We Collect */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>1. Information We Collect</h1>
                    <p className='text-[rgb(58,58,58)] font-semibold mt-4'>Information You Provide:</p>
                    <ul className='mt-4 list-disc w-full pl-12 flex flex-col gap-2'>
                        <li className='text-[rgb(58,58,58)]'><span className='font-medium'>Contact Information:</span> When you reach out to us through our website or by email, we may collect your name, email address, phone number, and company information.</li>
                        <li className='text-[rgb(58,58,58)]'><span className='font-medium'>Account Information:</span> If you create an account on our Site, we may collect your username, password, and other account-related information.</li>
                        <li className='text-[rgb(58,58,58)]'><span className='font-medium'>Inquiry Information:</span> When you submit a request for information or a quote, we may collect details about your business needs and requirements.</li>
                    </ul>

                    <h1 className='text-[rgb(58,58,58)] font-semibold mt-4'>Information We Collect Automatically:</h1>
                    <ul className='mt-4 list-disc w-full pl-12 flex flex-col gap-2'>
                        <li className='text-[rgb(58,58,58)]'><span className='font-medium'>Usage Data:</span> We collect information about how you use our Site, such as the pages you visit, the links you click, and the time you spend on our Site.</li>
                        <li className='text-[rgb(58,58,58)]'><span className='font-medium'>Device Information:</span> We may collect information about your device, including your IP address, operating system, browser type, and device identifiers.</li>
                        <li className='text-[rgb(58,58,58)]'><span className='font-medium'>Location Data:</span> If you enable location services on your device, we may collect information about your location.</li>
                    </ul>

                    {/* 2. How We Use Your Information */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>2. How We Use Your Information</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>We use your information for various purposes, including:</p>
                    <ul className='mt-4 list-disc w-full pl-12 flex flex-col gap-2'>
                        <li className='text-[rgb(58,58,58)]'>Providing and Improving Our Services</li>
                        <li className='text-[rgb(58,58,58)]'>Communication</li>
                        <li className='text-[rgb(58,58,58)]'>Marketing and Advertising</li>
                        <li className='text-[rgb(58,58,58)]'>Analytics and Research</li>
                        <li className='text-[rgb(58,58,58)]'>Compliance with Laws and Regulations</li>
                    </ul>

                    {/* 3. Sharing Your Information */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>3. Sharing Your Information</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>We may share your information with third-party service providers who assist us in providing our services.</p>

                    {/* 4. Data Security */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>4. Data Security</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>

                    {/* 5. Your Choice */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>5. Your Choices</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>You have the following choices regarding your information:</p>
                    <ul className='mt-4 list-disc w-full pl-12 flex flex-col gap-2'>
                        <li className='text-[rgb(58,58,58)]'>Access and Update Your Information</li>
                        <li className='text-[rgb(58,58,58)]'>Opt Out of Marketing Communications</li>
                        <li className='text-[rgb(58,58,58)]'>Delete Your Account</li>
                    </ul>

                    {/* 6. Children’s Privacy */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>6. Children’s Privacy</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>Our Site is not intended for children under the age of 13.</p>

                    {/* 7. Changes to This Privacy Policy */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>7. Changes to This Privacy Policy</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>We may update this Privacy Policy from time to time.</p>

                    {/* 8. Contact Us */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>8. Contact Us</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p className='text-[rgb(58,58,58)] mt-4'>Matrix Global Solutions</p>
                    <p className='mt-1 text-[rgb(58,58,58)]'>All-Rehman Arcade, Plot no 242, Block C Pia Housing Scheme, Lahore, Punjab 54770</p>
                    <a href="mailto:matrixglobalsolutions@gmail.com" target='_blank'>
                        <p className='text-[rgb(0,144,255)] hover:text-[text-[rgb(254,49,49)] cursor-pointer hover:underline'>matrixglobal7860@gmail.com</p>
                    </a>

                    {/* 9. Your California Privacy Rights */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>9. Your California Privacy Rights</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>California residents have certain rights regarding their personal information.</p>

                    {/* 10. Cookies */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>10. Cookies</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>Our Site uses cookies and similar technologies to collect information about your browsing activity.</p>

                    {/* 9. Your California Privacy Rights */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>11. Third-Party Links</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>Our Site may contain links to third-party websites.</p>
                </div>
            </div>
        </>
    )
}

export default PrivacyMain