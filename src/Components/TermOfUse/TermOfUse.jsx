import React, { useEffect } from 'react'
import TermOfUseMain from './TermOfUseMain'
import FooterTermOfUse from '../Footer/FooterTermOfUse'

const TermOfUse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <TermOfUseMain />
            <FooterTermOfUse />

        </>
    )
}

export default TermOfUse