import React from 'react';
import CourseHero from './components/CourseHero';
import CourseReviewVideo from './components/CourseReviewVideo';
import CourseOverview from './components/CourseOverview';
import CourseGallery from './components/CourseGallery';
import CourseContentSection from './components/CourseContentSection';
import CourseCurriculum from './components/CourseCurriculum';
import RegistrationCta from './components/RegistrationCta';
import OtherTrainingsSection from './components/OtherTrainingsSection';

function TrainingDetailPage({ course, otherCourses }) {
    if (!course) {
        return (
            <div className="container mx-auto py-24 text-center">
                <h1 className="text-2xl font-bold">Khóa học không tồn tại.</h1>
            </div>
        );
    }
    
    const overviewData = {
        age: course.age,
        duration: course.duration,
        outcome: course.outcome,
        method: course.method,
    };
    
    const skillsData = {
        speaking: course.speaking,
        listening: course.listening,
        reading: course.reading,
        writing: course.writing,
    };

    const formatCurriculum = (curriculum) => {
        if (!curriculum) return [];
        return curriculum.map(item => ({
            ...item,
            content: `<ul>${item.content.split('\r\n').map(line => `<li>${line}</li>`).join('')}</ul>`
        }));
    };
    
    return (
        <main>
            <CourseHero 
                title={course.title} 
                description={course.description.replace(/<[^>]+>/g, '')}
                imageSrc={course.thumbnail} 
            />
            <CourseOverview overview={overviewData} />
            <CourseGallery images={course.images} />
            
            {course.youtube_review_link && (
                <CourseReviewVideo youtubeUrl={course.youtube_review_link} />
            )}
            <CourseContentSection content={course.content} />
            <CourseCurriculum curriculum={formatCurriculum(course.curriculum)} />
            <RegistrationCta courseTitle={course.title} courseId={course.id} />
            <OtherTrainingsSection trainings={otherCourses} />
        </main>
    );
}

export default TrainingDetailPage;