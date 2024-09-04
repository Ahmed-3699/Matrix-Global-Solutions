import React, { useEffect } from 'react'
import TaxiDispatchMain from './TaxiDispatchMain'
import TaxiAllFeatures from './TaxiAllFeatures'
import ContactForm from '../utilis/ContactForm'
import FooterTaxi from '../Footer/FooterTaxi'

const TaxiDispatch = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
  return (
    <>
    <TaxiDispatchMain />
    <TaxiAllFeatures />
    <ContactForm />
    <FooterTaxi />
    </>
  )
}

export default TaxiDispatch