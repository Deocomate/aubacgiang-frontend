// src/app/(main)/teachers/[slug]/page.js
import { notFound } from 'next/navigation';
import { getTeacherBySlug, getOtherTeachers } from '@/services/teacherService';
import TeacherDetailPage from '@/pages/Teachers/Detail/TeacherDetailPage';

export async function generateMetadata({ params }) {
    const teacher = await getTeacherBySlug(params.slug);
    if (!teacher) {
        return { title: "Teacher Not Found" };
    }
    // Simple text extraction from description for SEO
    const plainDescription = teacher.description?.replace(/<[^>]+>/g, '').substring(0, 160) || `Profile of ${teacher.full_name}, an instructor at A&U English.`;

    return {
        title: `${teacher.full_name} - A&U English`,
        description: plainDescription,
    };
}

export default async function TeacherDetail({ params }) {
    const { slug } = params;
    const teacher = await getTeacherBySlug(slug);

    if (!teacher) {
        notFound();
    }
    
    const otherTeachers = await getOtherTeachers(teacher.id, 5);

    return <TeacherDetailPage teacher={teacher} otherTeachers={otherTeachers} />;
}