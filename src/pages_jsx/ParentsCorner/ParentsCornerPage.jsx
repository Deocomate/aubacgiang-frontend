/* src/pages_jsx/ParentsCorner/ParentsCornerPage.jsx */
import React from 'react';
import HeroSection from './components/HeroSection';
import KeyResourcesSection from './components/KeyResourcesSection';
import HandbookSection from './components/HandbookSection';
import DownloadsSection from './components/DownloadsSection';
import TestimonialsSection from './components/TestimonialsSection';
// THÊM: Import FaqSection
import FaqSection from '@/pages_jsx/Home/components/FaqSection';

// SỬA: Nhận thêm prop `faqs` và `testimonials`
function ParentsCornerPage({handbookArticles, documents, testimonials, faqs}) {
    return (<main>
        <HeroSection/>
        <KeyResourcesSection/>
        <HandbookSection articles={handbookArticles}/>
        <DownloadsSection documents={documents}/>
        <TestimonialsSection testimonials={testimonials}/>
        <FaqSection faqs={faqs}/>
    </main>);
}

export default ParentsCornerPage;