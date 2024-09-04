import React, { useEffect } from 'react'
import AboutMain from './AboutMain'
import Legacy from './Legacy'

const About = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
  return (
    <>
    <AboutMain />
    <Legacy />
    
    </>
  )
}

export default About