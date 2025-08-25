// src/app/sitemap.js

export default function sitemap() {
  // !!! QUAN TRỌNG: Thay đổi URL này thành tên miền thực tế của bạn
  const baseUrl = 'https://aubacgiang.edu.vn';

  // Lấy danh sách các trang tĩnh từ cấu trúc thư mục của bạn
  const staticRoutes = [
    '/',
    '/contact',
    '/facilities',
    '/knowledge',
    '/legal',
    '/news',
    '/parents-corner',
    '/teachers',
    '/training',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  return [
    ...staticRoutes,
    // ...newsRoutes, // Thêm các trang động sau khi đã lấy được dữ liệu
  ];
}
