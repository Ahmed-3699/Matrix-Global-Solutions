import React from 'react'
import NavbarContact from '../Navbars/NavbarContact'

const TermOfUseMain = () => {
    return (
        <>
            <div className='h-max w-full bg-white'>

                <NavbarContact />

                <div className='h-max w-[90%] m-auto shadow-md shadow-black px-6 py-8 rounded-lg mb-12'>
                    <h1 className='text-[rgb(15,23,42)] sm:text-3xl text-[27px] text-center font-bold'>Welcome to Matrix Global Solutions – Terms of Use</h1>
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-7 font-serif'>These Terms of Use (“Terms”) govern your use of our website located at <a href="/" target='_blank'><span className='text-[rgb(0,123,255)] font-bold sm:text-2xl text-[20px] hover:underline cursor-pointer break-words'>www.matrixglobalsolutions.com</span></a> (the “Site”). By accessing or using the Site, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the Site.</h1>

                    {/* 1. Acceptance of Terms */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>1. Acceptance of Terms</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>By using the Site, you affirm that you are of legal age to form a binding contract with Matrix Global Solutions and that you agree to abide by these Terms.</p>

                    {/* 2. Changes to Terms */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>2. Changes to Terms</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>Matrix Global Solutions reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting. Your continued use of the Site signifies your acceptance of the updated Terms.</p>


                    {/* 3. Use of the Site */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>3. Use of the Site</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                    <ul className='mt-4 list-disc w-full pl-12 flex flex-col gap-2'>
                        <li className='text-[rgb(58,58,58)]'>Violate any applicable federal, state, local, or international law or regulation.</li>
                        <li className='text-[rgb(58,58,58)]'>Transmit any unsolicited or unauthorized advertising, promotional materials, or spam.</li>
                        <li className='text-[rgb(58,58,58)]'>Engage in any conduct that restricts or inhibits anyone’s use of the Site, or which, as determined by Matrix Global Solutions, may harm Matrix Global Solutions or users of the Site.</li>
                    </ul>

                    {/* 4. Intellectual Property Rights */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>4. Intellectual Property Rights</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>The Site and its entire contents, features, and functionality are owned by Matrix Global Solutions, its licensors, or other providers of such material and are protected by intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site.</p>

                    {/* 5. Disclaimer of Warranties */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>5. Disclaimer of Warranties</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>The Site is provided on an “as is” and “as available” basis. Matrix Global Solutions makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, or materials included on the Site.</p>

                    {/* 6. Limitation of Liability */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>6. Limitation of Liability</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>In no event shall Matrix Global Solutions, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, arising out of or in connection with your use, or inability to use, the Site.</p>

                    {/* 7. Governing Law */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>7. Governing Law</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Matrix Global Solutions operates, without regard to its conflict of law principles.</p>

                    {/* 8. Contact Information */}
                    <h1 className='sm:text-2xl text-[20px] font-bold mt-5'>8. Contact Information</h1>
                    <p className='text-[rgb(58,58,58)] mt-4'>For any questions or concerns about these Terms, please contact us at <span className='cursor-pointer hover:underline text-[rgb(0,123,255)]'><a href="mailto:matrixglobalsolutions@gmail.com" target="_blank" rel="noopener noreferrer">
                    matrixglobal7860@gmail.comx
                    </a></span></p>
                    <p>Thank you for visiting <a href="" target="_blank" rel="noopener noreferrer"><span className='cursor-pointer hover:underline text-[rgb(0,123,255)]'>www.matrixglobalsolutions.com.</span></a> We hope you find our Site informative and useful.</p>




                </div>
            </div>


        </>
    )
}

export default TermOfUseMain