// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Thêm 'i.ytimg.com' vào danh sách domains
        domains: ['placehold.co', 'i.ytimg.com'],
    },
};

export default nextConfig;