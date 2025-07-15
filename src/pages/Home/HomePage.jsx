import React from 'react';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TeachersSection from './components/TeachersSection';
import GallerySection from './components/GallerySection';
import FaqSection from './components/FaqSection';
import YoutubeSection from './components/YoutubeSection';

function HomePage() {
    return (
        <main>
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <ProgramsSection />
            <WhyChooseUsSection />
            <TeachersSection />
            <GallerySection />
            <YoutubeSection />
            <FaqSection />
        </main>
    );
}

export default HomePage;