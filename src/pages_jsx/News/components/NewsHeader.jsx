import React from 'react';

function NewsHeader({ categoryInfo }) {
    if (categoryInfo) {
        return (
            <div className="mb-12 border-b pb-4">
                <h1 className="text-3xl font-bold">{categoryInfo.name}</h1>
            </div>
        );
    }

    return (
        <div className="mb-12 border-b pb-4">
            <h1 className="text-3xl font-bold">
                Tin tức và Sự kiện
            </h1>
        </div>
    );
}

export default NewsHeader;