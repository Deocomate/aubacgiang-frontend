import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Target, BookOpen } from 'lucide-react';

// UPDATE: Chỉnh sửa component InfoPill để căn giữa nội dung
function InfoPill({ icon, title, content }) {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div className="flex-shrink-0 text-orange-500">{icon}</div>
            <div>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-gray-600 mt-1">{content}</p>
            </div>
        </div>
    );
}

function CourseOverview({ overview }) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <Card className="p-8 md:p-12">
                    {/* UPDATE: Căn giữa tiêu đề */}
                    <CardHeader className="p-0 mb-8 text-center">
                        <CardTitle className="text-3xl font-bold">Tổng Quan Khóa Học</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        {/* UPDATE: Thay đổi grid layout để cân đối hơn */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <InfoPill icon={<Users className="h-8 w-8" />} title="Đối tượng học viên" content={overview.age} />
                            <InfoPill icon={<Clock className="h-8 w-8" />} title="Thời lượng" content={overview.duration} />
                            <InfoPill icon={<Target className="h-8 w-8" />} title="Mục tiêu đầu ra" content={overview.outcome} />
                            <InfoPill icon={<BookOpen className="h-8 w-8" />} title="Phương pháp giảng dạy" content={overview.method} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default CourseOverview;