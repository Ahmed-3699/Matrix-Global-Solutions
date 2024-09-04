import React, { useEffect } from 'react'
import CareerMain from './CareerMain'
import OurProcess from './OurProcess'
import UnlockPotential from './UnlockPotential'
import FooterCareer from '../Footer/FooterCareer'

const Career = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
}, [])
  return (
    <>
      <CareerMain />
      <OurProcess />
      <UnlockPotential />
      <FooterCareer />
    </>
  )
}

export default Career