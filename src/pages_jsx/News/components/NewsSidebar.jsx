"use client";

import React, { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';

// SỬA: Thêm giá trị mặc định cho prop `categories`
function NewsSidebar({ categories = [] }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        if (searchTerm) {
            params.set('search', searchTerm);
        } else {
            params.delete('search');
        }
        // Khi tìm kiếm, luôn quay về trang 1
        params.delete('page'); 
        
        // Chỉ điều hướng đến trang /news khi tìm kiếm
        router.push(`/news?${params.toString()}`);
    };

    return (
        <aside className="sticky top-28">
            <div className="space-y-10">
                <form onSubmit={handleSearch}>
                    <div className="flex w-full items-center">
                        <Input 
                            type="text" 
                            placeholder="Tìm kiếm bài viết..." 
                            className="h-11 rounded-r-none border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button type="submit" className="h-11 rounded-l-none bg-orange-500 hover:bg-orange-600">
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>
                </form>

                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500 inline-block">
                        Danh mục
                    </h3>
                    <ul className="space-y-4">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link href={`/category/${category.slug}`} className="flex justify-between items-center text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-200 pb-3 text-base">
                                    <span className="font-semibold">{category.name}</span>
                                    <span className="text-gray-500">({category.count})</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default NewsSidebar;
