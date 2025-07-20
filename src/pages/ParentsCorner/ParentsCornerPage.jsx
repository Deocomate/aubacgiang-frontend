/* src/pages/ParentsCorner/ParentsCornerPage.jsx */
import React from 'react';
import HeroSection from './components/HeroSection';
import KeyResourcesSection from './components/KeyResourcesSection';
import HandbookSection from './components/HandbookSection';
import DownloadsSection from './components/DownloadsSection';
import TestimonialsSection from './components/TestimonialsSection';

function ParentsCornerPage({ handbookArticles, documents }) {
    return (
        <main>
            <HeroSection />
            <KeyResourcesSection />
            <HandbookSection articles={handbookArticles} />
            <DownloadsSection documents={documents} />
            <TestimonialsSection />
        </main>
    );
}

export default ParentsCornerPage;