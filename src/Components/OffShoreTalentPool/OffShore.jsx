import React, { useEffect } from 'react'
import OffShoreMain from './OffShoreMain'
import OffShoreAllTalent from './OffShoreAllTalent'
import ContactForm from '../utilis/ContactForm'
import FooterOffShore from '../Footer/FooterOffShore'

const OffShore = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
  return (
    <>
    <OffShoreMain />
    <OffShoreAllTalent />
    <ContactForm />
    <FooterOffShore />
    </>
  )
}

export default OffShore