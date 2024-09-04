import React, { useEffect } from 'react'
import HomeSecurityMain from './HomeSecurityMain'
import HomeSecurityFeatuers from './HomeSecurityFeatuers'
import ContactForm from '../utilis/ContactForm'
import FooterSecurity from '../Footer/FooterSecurity'

const HomeSecurity = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
  return (
    <>
    <HomeSecurityMain />
    <HomeSecurityFeatuers />
    <ContactForm />
    <FooterSecurity/>
    </>
  )
}

export default HomeSecurity