import React, { useEffect } from 'react'
import DispatchOrderMain from './DispatchOrderMain'
import DispatchAllFeatures from './DispatchAllFeatures'
import ContactForm from '../utilis/ContactForm'
import FooterDispatch from '../Footer/FooterDispatch'
import MatrixglobalChoose from './MatrixglobalChoose'

const DispatchOrder = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
  return (
    <>
    <DispatchOrderMain />
    <DispatchAllFeatures />
    <MatrixglobalChoose />
    <ContactForm />
    <FooterDispatch />
    
    </>
  )
}

export default DispatchOrder