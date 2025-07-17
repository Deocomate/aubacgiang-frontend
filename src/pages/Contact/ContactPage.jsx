"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import Link from 'next/link';

// Data for all locations displayed on the left panel
const allLocations = [
    { address: '173 NV2/10 Xuân Thủy, Cầu Giấy, Hà Nội' },
    { address: 'Liên kề 8 Lô 10 – Ngõ 67, Phùng Khoang, Trung Văn, Nam Từ Liêm, Hà Nội' },
    { address: 'Số 34 Tăng Thiết Giáp, P. Cổ Nhuế 2, Q. Bắc Từ Liêm, Hà Nội' },
    { address: 'Số 99, Trung Liệt, Đống Đa, Hà Nội' },
    { address: 'Số 10 Ngõ 31 Đặng Thùy Trâm, Nghĩa Tân, Cầu Giấy, Hà Nội' },
    { address: 'Cơ sở Thanh Hóa: Lô C10-11 Khu Thương Mại Dịch Vụ & Chung Cư Đông Hương, P. Đông Hương, TP. Thanh Hoá' },
];

// Data for the 4 branches with interactive maps
const hanoiBranches = [
    {
        id: 'cs1',
        name: 'Cơ sở 1',
        address: '173 NV2/10 Xuân Thủy, Cầu Giấy, Hà Nội',
    },
    {
        id: 'cs2',
        name: 'Cơ sở 2',
        address: 'Liên kề 8 Lô 10 – Ngõ 67, Phùng Khoang, Trung Văn, Nam Từ Liêm, Hà Nội',
    },
    {
        id: 'cs3',
        name: 'Cơ sở 3',
        address: 'Số 34 Tăng Thiết Giáp, P. Cổ Nhuế 2, Q. Bắc Từ Liêm, Hà Nội',
    },
    {
        id: 'cs4',
        name: 'Cơ sở 4',
        address: 'Số 99, Trung Liệt, Đống Đa, Hà Nội',
    },
];

const contactDetails = {
    phone: '0906.875.918',
    email: 'truyenthong@anu.edu.vn',
    fanpage: 'fb.com/anulanguage',
    fanpageUrl: 'https://www.facebook.com/anulanguage'
};

function ContactPage() {
    return (
        <div className="bg-white py-24 sm:py-32 sm:px-16 px-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Contact Information */}
                    <div className="prose prose-lg max-w-none">
                        {/* FIX: Title size reduced */}
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Hệ thống Anh ngữ A&U tại Hà Nội
                        </h1>
                        <div className="mt-8 space-y-4">
                            {allLocations.map((location, index) => (
                                <div key={index} className="flex items-start">
                                    <MapPin className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-orange-500" />
                                    <p className="text-gray-700 not-prose my-0">{location.address}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-gray-200 space-y-4">
                            <div className="flex items-center">
                                <Phone className="h-6 w-6 mr-3 flex-shrink-0 text-orange-500" />
                                <a href={`tel:${contactDetails.phone}`} className="text-gray-700 not-prose no-underline hover:text-orange-600">
                                    {contactDetails.phone}
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-6 w-6 mr-3 flex-shrink-0 text-orange-500" />
                                <a href={`mailto:${contactDetails.email}`} className="text-orange-600 not-prose no-underline hover:text-orange-800">
                                    {contactDetails.email}
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Facebook className="h-6 w-6 mr-3 flex-shrink-0 text-orange-500" />
                                <Link href={contactDetails.fanpageUrl} target="_blank" rel="noopener noreferrer" className="text-orange-600 not-prose no-underline hover:text-orange-800">
                                    {contactDetails.fanpage}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Map */}
                    <div className="rounded-lg shadow-2xl overflow-hidden">
                        <Tabs defaultValue="cs1" className="w-full flex flex-col h-full">
                            <TabsList className="grid w-full grid-cols-4 rounded-b-none h-auto p-2 bg-gray-100">
                                {hanoiBranches.map((branch) => (
                                    // FIX: Added cursor, padding, and active state styles
                                    <TabsTrigger
                                        key={branch.id}
                                        value={branch.id}
                                        className="text-xs sm:text-sm cursor-pointer px-3 py-1.5 transition-colors data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                                    >
                                        {branch.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            <div className="flex-grow">
                                {hanoiBranches.map((branch) => (
                                    <TabsContent key={branch.id} value={branch.id} className="w-full h-full m-0">
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.address)}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0, minHeight: '500px' }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </TabsContent>
                                ))}
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;