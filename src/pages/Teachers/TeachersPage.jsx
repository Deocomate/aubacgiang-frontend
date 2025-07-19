import React from 'react';
import CtaSection from './components/CtaSection';
import PhilosophySection from './components/PhilosophySection';
import QualityStandardsSection from './components/QualityStandardsSection';
import TeacherProfilesSection from './components/TeacherProfilesSection';
import TeachersHero from './components/TeachersHero';
import WorkPermitsSection from './components/WorkPermitsSection';

function TeachersPage({ initialTeachersData }) {
    return (
        <main>
            <TeachersHero />
            <PhilosophySection />
            <TeacherProfilesSection initialTeachersData={initialTeachersData} />
            <WorkPermitsSection />
            <QualityStandardsSection />
            <CtaSection />
        </main>
    );
}

export default TeachersPage;