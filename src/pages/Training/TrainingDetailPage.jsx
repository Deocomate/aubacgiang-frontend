import React from 'react';
import CourseHero from './Detail/components/CourseHero';
import CourseOverview from './Detail/components/CourseOverview';
import SkillBreakdown from './Detail/components/SkillBreakdown';
import CourseCurriculum from './Detail/components/CourseCurriculum';
import RegistrationCta from './Detail/components/RegistrationCta';

function TrainingDetailPage({ course }) {
    if (!course) {
        return (
            <div className="container mx-auto py-24 text-center">
                <h1 className="text-2xl font-bold">Khóa học không tồn tại.</h1>
            </div>
        );
    }
    
    return (
        <main>
            <CourseHero 
                title={course.title} 
                description={course.shortDescription} 
                imageSrc={course.imageSrc} 
            />
            <CourseOverview overview={course.overview} />
            <SkillBreakdown skills={course.skills} />
            <CourseCurriculum curriculum={course.curriculum} />
            <RegistrationCta />
        </main>
    );
}

export default TrainingDetailPage;