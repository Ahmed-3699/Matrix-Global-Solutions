import React, { useEffect } from 'react'
import PrivacyMain from './PrivacyMain'
import FooterPrivacy from '../Footer/FooterPrivacy'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <PrivacyMain />
      <FooterPrivacy />

    </>
  )
}

export default PrivacyPolicy