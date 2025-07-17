import React from 'react';
import HeroSection from './components/HeroSection';
import KeyResourcesSection from './components/KeyResourcesSection';
import HandbookSection from './components/HandbookSection';
import DownloadsSection from './components/DownloadsSection';
import AnnouncementsSection from './components/AnnouncementsSection';
import TestimonialsSection from './components/TestimonialsSection';
// FIX: Xóa CommunityCtaSection

function ParentsCornerPage() {
    return (
        <main>
            <HeroSection />
            <KeyResourcesSection />
            <HandbookSection />
            <DownloadsSection />
            <AnnouncementsSection />
            <TestimonialsSection />
        </main>
    );
}

export default ParentsCornerPage;