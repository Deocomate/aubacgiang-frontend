import React from 'react';

function HomePage() {
    return (
        <>
            <h1 className="text-primary text-5xl font-bold">Tầm nhìn - Sứ mệnh</h1>

            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
                Đăng ký học
            </button>

            <div>
                <p className="text-text">Đây là đoạn văn bản chính.</p>
                <p className="text-text-muted">Đây là thông tin bổ sung.</p>
            </div>

            <span className="text-secondary">
                {/* SVG icon here */}
            </span>
        </>
    );
}

export default HomePage;