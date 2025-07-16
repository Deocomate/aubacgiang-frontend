/* src/pages/News/components/NewsSidebar.jsx */
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';
// FIX: Import hàm slugify
import { slugify } from '@/lib/utils';

function NewsSidebar({ categories }) {
    return (
        <aside className="sticky top-28">
            <div className="space-y-10">
                <div>
                    <div className="flex w-full items-center">
                        <Input type="text" placeholder="Search..." className="h-11 rounded-r-none border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0" />
                        <Button type="submit" className="h-11 rounded-l-none bg-orange-500 hover:bg-orange-600">
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500 inline-block">
                        Danh mục
                    </h3>
                    <ul className="space-y-4">
                        {categories.map((category) => (
                            <li key={category.name}>
                                {/* FIX: Sử dụng slugify để tạo đường dẫn đúng */}
                                <Link href={`/category/${slugify(category.name)}`} className="flex justify-between items-center text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-200 pb-3 text-base">
                                    <span className="font-semibold uppercase">{category.name}</span>
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