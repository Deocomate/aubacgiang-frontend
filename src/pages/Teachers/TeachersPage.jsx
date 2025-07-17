import React from 'react';
import CtaSection from './components/CtaSection';
import PhilosophySection from './components/PhilosophySection';
import QualityStandardsSection from './components/QualityStandardsSection';
import TeacherProfilesSection from './components/TeacherProfilesSection';
import TeachersHero from './components/TeachersHero';
import WorkPermitsSection from './components/WorkPermitsSection';

function TeachersPage() {
    return (
        <main>
            <TeachersHero />
            <PhilosophySection />
            <TeacherProfilesSection />
            <WorkPermitsSection />
            <QualityStandardsSection />
            <CtaSection />
        </main>
    );
}

export default TeachersPage;