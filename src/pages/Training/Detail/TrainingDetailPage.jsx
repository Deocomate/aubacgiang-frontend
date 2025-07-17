import React from 'react';
import CourseHero from './components/CourseHero';
import CourseOverview from './components/CourseOverview';
import SkillBreakdown from './components/SkillBreakdown';
import CourseCurriculum from './components/CourseCurriculum';
import RegistrationCta from './components/RegistrationCta';

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
            {/* FIX: Truyền `course.title` vào component */}
            <RegistrationCta courseTitle={course.title} />
        </main>
    );
}

export default TrainingDetailPage;