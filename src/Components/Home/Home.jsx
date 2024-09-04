import React, { useEffect } from 'react'
import MainSection from './MainSection'
import Section1 from './Section1'
import AllProjectsSection from './AllProjectsSection'
import BusinessPerformance from './BusinessPerformance'
import Industries from './Industries'
import Testimonials from './Testimonials'
import ActionNow from './ActionNow'
import FooterHome from '../Footer/FooterHome'

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <MainSection />
            <Section1 />
            <AllProjectsSection />
            <BusinessPerformance />
            <Industries/>
            <Testimonials/>
            <ActionNow />
            <FooterHome />
        </>
    )
}

export default Home