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

function HomePage({ data }) {
    // API returns 'fags', we use it as is.
    const { banners, stats, fags, images, link_youtubes } = data;

    return (
        <main>
            <HeroSection banner={banners} />
            <StatsSection stats={stats} />
            <AboutSection />
            <ProgramsSection />
            <WhyChooseUsSection />
            <TeachersSection />
            <GallerySection images={images} />
            <YoutubeSection links={link_youtubes} />
            <FaqSection faqs={fags} />
        </main>
    );
}

export default HomePage;