/* src/pages/Teachers/Detail/TeacherDetailPage.jsx */
import React from 'react';
import Image from 'next/image';
import { Award } from 'lucide-react';
import OtherTeachersSection from './components/OtherTeachersSection';

// CHỈNH SỬA: Nhận props chung từ pageFactory
function TeacherDetailPage({ teacher, otherTeachers }) {
    return (
        <main>
            <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto"> 
                        <header className="mb-8 flex flex-col sm:flex-row items-center gap-8 border-b pb-8">
                            <div className="flex-shrink-0">
                                <Image
                                    src={teacher.avatar}
                                    alt={`Portrait of ${teacher.full_name}`}
                                    width={200}
                                    height={200}
                                    className="rounded-full object-cover w-48 h-48 border-4 border-orange-200 shadow-md"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                                    {teacher.full_name}
                                </h1>
                                <p className="mt-2 text-xl text-orange-600 font-semibold">{teacher.role}</p>
                                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4">
                                    {teacher.qualifications.map((q, i) => (
                                        <span key={i} className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                            <Award className="w-4 h-4 text-orange-500" />
                                            {q}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </header>
                        
                        <div
                            className="prose prose-lg max-w-none prose-img:rounded-xl prose-h3:text-gray-800"
                            dangerouslySetInnerHTML={{ __html: teacher.description || '<p>No detailed description available.</p>' }}
                        />
                    </div>
                </div>
            </div>
            
            <OtherTeachersSection teachers={otherTeachers} />
        </main>
    );
}

export default TeacherDetailPage;