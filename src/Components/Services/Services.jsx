import React from 'react'
import NavbarServices from '../Navbars/NavbarServices'
import AllProjects from './AllProjects'
import BusinessBenifits from './BusinessBenifits'
import FooterServices from '../Footer/FooterServices'

const Services = () => {
  return (
    <>
    <NavbarServices />
    <div className='w-full flex justify-center sm:py-20 py-14'>
      <h1 className='text-[rgb(15,23,42)] font-bold sm:text-[42px] text-[27px] text-center'>Optimize with Expert Outsourcing Solutions</h1>
    </div>
    <AllProjects/>
    <BusinessBenifits/>
    <FooterServices />
    
    </>
  )
}

export default Services