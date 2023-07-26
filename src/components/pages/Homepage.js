import React from 'react'
import HeroSection from '../HeroSection';
import LittleLemon from '../LittleLemon';
import Testimonials from '../Testimonials';
import SpecialMenu from '../SpecialMenu';

const Homepage = () => {
    return (
        <main>
            <HeroSection />
            <SpecialMenu />
            <Testimonials />
            <LittleLemon />
        </main>
    )
}

export default Homepage
