import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

function CourseCurriculum({ curriculum }) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-orange-500">Nội Dung Chương Trình</h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-800">
                        Lộ Trình Học Tập Chi Tiết
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Accordion type="multiple" className="w-full">
                        {curriculum.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left text-xl font-bold hover:no-underline">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-6 w-6 text-orange-500" />
                                        {item.module}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="prose prose-base max-w-none text-gray-700 pl-12 prose-li:font-medium">
                                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default CourseCurriculum;