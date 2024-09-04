import React, { useEffect } from 'react'
import ContactCenterMain from './ContactCenterMain'
import CenterAllFeautures from './CenterAllFeautures'
import ContactForm from '../utilis/ContactForm'
import FooterContactCenter from '../Footer/FooterContactCenter'

const ContactCenter = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
}, [])
  return (
    <>
    <ContactCenterMain />
    <CenterAllFeautures />
    <ContactForm />
    <FooterContactCenter />
    </>
  )
}

export default ContactCenter