import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Ear, BookOpen, PenLine } from 'lucide-react';

const skillDetails = {
    speaking: {
        title: 'Kỹ năng Nói (Speaking)',
        icon: <Mic className="h-7 w-7 text-white" />
    },
    listening: {
        title: 'Kỹ năng Nghe (Listening)',
        icon: <Ear className="h-7 w-7 text-white" />
    },
    reading: {
        title: 'Kỹ năng Đọc (Reading)',
        icon: <BookOpen className="h-7 w-7 text-white" />
    },
    writing: {
        title: 'Kỹ năng Viết (Writing)',
        icon: <PenLine className="h-7 w-7 text-white" />
    },
};

function SkillBreakdown({ skills }) {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Chi Tiết Kỹ Năng</h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-800">
                        Phát Triển Toàn Diện 4 Kỹ Năng
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([key, description]) => {
                        const detail = skillDetails[key];
                        return (
                            <Card key={key} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-gray-800 flex items-center gap-4">
                                        <span className="flex-shrink-0 bg-orange-500 p-3 rounded-full">
                                            {detail.icon}
                                        </span>
                                        {detail.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 leading-relaxed font-medium">{description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default SkillBreakdown;