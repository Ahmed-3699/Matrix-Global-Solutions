import React from 'react'
import Accordian from '../utilis/Accordian'


const FrequentQuestions = () => {
  return (
    <>
    <div className='h-max w-full bg-[rgb(255,237,230)] sm:py-24 py-16'>
        <h1 className='sm:text-3xl text-[27px] w-[90%] m-auto text-[rgb(15,23,42)] font-bold text-center'>Frequently Asked Questions</h1>
        <p className='text-[rgb(58,58,58)] text-center mt-4 lg:w-[70%] sm:w-[80%] w-[90%] m-auto'>Find Answers to Common Questions About Our Services and Discover How We Can Help You.</p>

        <div className='h-max md:w-[70%] sm:w-[80%] w-[90%] m-auto mt-12'>
            <Accordian />
        </div>
    </div>
    </>
  )
}

export default FrequentQuestions