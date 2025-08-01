import React from 'react';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TeachersSection from './components/TeachersSection';
import GallerySection from './components/GallerySection';
import YoutubeSection from './components/YoutubeSection';

// SỬA: Xóa `fags` khỏi destructuring và xóa import `FaqSection`
function HomePage({data = {}}) {
    const {
        banners = {title: '', description: '', images: []},
        stats = [],
        images = [],
        link_youtubes = [],
        teachers = [],
        trainings = []
    } = data;

    return (<main>
        <HeroSection banner={banners}/>
        <StatsSection stats={stats}/>
        <AboutSection/>
        <ProgramsSection trainings={trainings}/>
        <WhyChooseUsSection/>
        <TeachersSection teachers={teachers}/>
        <GallerySection images={images}/>
        <YoutubeSection links={link_youtubes}/>
    </main>);
}

export default HomePage;