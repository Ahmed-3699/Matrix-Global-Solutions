import React, { useEffect } from 'react'
import ContactMain from './ContactMain'
import ContactAddress from './ContactAddress'
import FrequentQuestions from './FrequentQuestions'
import FooterContact from '../Footer/FooterContact'
import StayConnected from './StayConnected'

const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <ContactMain />
            <ContactAddress />
            <FrequentQuestions />
            <StayConnected />
            <FooterContact />
        </>
    )
}

export default Contact