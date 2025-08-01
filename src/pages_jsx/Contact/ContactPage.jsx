"use client";

import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {MapPin, Phone, Mail, Facebook} from 'lucide-react';
import Link from 'next/link';

const extractMapSrc = (iframeString) => {
    if (!iframeString) return "";
    const srcMatch = iframeString.match(/src="([^"]*)"/);
    return srcMatch ? srcMatch[1] : "";
};

// SỬA: Thêm giá trị mặc định cho contactData và các thuộc tính của nó
function ContactPage({contactData = {}}) {
    const {address: locations = [], phone = '', email = '', facebook = ''} = contactData;

    console.log(contactData)

    console.log(facebook)

    const fanpageName = facebook ? facebook.split('/').pop() : 'A&U Language';

    const branches = locations.map((loc, index) => ({
        id: `cs${index + 1}`,
        name: `Cơ sở ${index + 1}`,
        address: loc.address,
        mapUrl: extractMapSrc(loc.googlemap),
    }));

    return (
        <div className="bg-white py-24 sm:py-32 sm:px-16 px-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Hệ thống Anh ngữ A&U
                        </h1>
                        <div className="mt-8 space-y-4">
                            {locations.map((location, index) => (
                                <div key={index} className="flex items-start">
                                    <MapPin className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-orange-500"/>
                                    <p className="text-gray-700 not-prose my-0">{location.address}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-gray-200 space-y-4">
                            <div className="flex items-center">
                                <Phone className="h-6 w-6 mr-3 flex-shrink-0 text-orange-500"/>
                                <a href={`tel:${phone}`}
                                   className="text-gray-700 not-prose no-underline hover:text-orange-600">
                                    {phone}
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-6 w-6 mr-3 flex-shrink-0 text-orange-500"/>
                                <a href={`mailto:${email}`}
                                   className="text-orange-600 not-prose no-underline hover:text-orange-800">
                                    {email}
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Facebook className="h-6 w-6 mr-3 flex-shrink-0 text-orange-500"/>
                                <Link href={facebook || '#'} target="_blank" rel="noopener noreferrer"
                                      className="text-orange-600 not-prose no-underline hover:text-orange-800">
                                    {facebook}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-2xl overflow-hidden">
                        {branches.length > 0 && (
                            <Tabs defaultValue={branches[0].id} className="w-full flex flex-col h-full">
                                <TabsList
                                    className="grid w-full rounded-b-none h-auto p-2 bg-gray-100"
                                    style={{gridTemplateColumns: `repeat(${branches.length}, 1fr)`}}
                                >
                                    {branches.map((branch) => (
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
                                    {branches.map((branch) => (
                                        <TabsContent key={branch.id} value={branch.id} className="w-full h-full m-0">
                                            <iframe
                                                src={branch.mapUrl}
                                                width="100%"
                                                height="100%"
                                                style={{border: 0, minHeight: '500px'}}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </TabsContent>
                                    ))}
                                </div>
                            </Tabs>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
