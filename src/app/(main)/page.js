import HomePage from "@/pages/Home/HomePage";
import { getHomepageData } from "@/services/homeService";
import { getFeaturedTeachers } from "@/services/teacherService";

export default async function Home() {
  const [homeData, featuredTeachers] = await Promise.all([
    getHomepageData(),
    getFeaturedTeachers(6)
  ]);

  if (!homeData) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Could not load homepage data. Please try again later.</p>
      </main>
    );
  }

  const pageData = { ...homeData, teachers: featuredTeachers };

  return (<HomePage data={pageData} />);
}