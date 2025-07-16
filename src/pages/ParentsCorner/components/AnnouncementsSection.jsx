import React from 'react';
import { CalendarDays, Megaphone, Trophy } from 'lucide-react';

const announcements = [
    { date: '25/08/2025', title: 'Họp phụ huynh đầu năm học mới', description: 'Trao đổi về lộ trình và mục tiêu học tập năm học 2025-2026.', icon: <Megaphone className="text-blue-500" /> },
    { date: '15/09/2025', title: 'Phát động cuộc thi "A&U Spelling Bee"', description: 'Cuộc thi đánh vần tiếng Anh thường niên dành cho khối Tiểu học.', icon: <Trophy className="text-yellow-500" /> },
    { date: '30/09/2025 - 02/10/2025', title: 'Lịch nghỉ lễ Quốc Khánh', description: 'Trung tâm sẽ nghỉ lễ từ ngày 30/09 đến hết ngày 02/10.', icon: <CalendarDays className="text-red-500" /> },
];

function AnnouncementsSection() {
    return (
        <section id="announcements" className="bg-white py-24">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Thông Tin Quan Trọng</h2>
                    <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
                        Lịch Sự Kiện & Thông Báo
                    </p>
                </div>
                 <div className="max-w-4xl mx-auto space-y-8">
                    {announcements.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                    {item.icon}
                                </span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{item.title}</p>
                                <p className="text-sm text-gray-500">{item.date}</p>
                                <p className="mt-1 text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AnnouncementsSection;