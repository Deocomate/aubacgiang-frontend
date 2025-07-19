import HomePage from "@/pages/Home/HomePage";
import { getHomepageData } from "@/services/homeService";

export default async function Home() {
  const homeData = await getHomepageData();

  // Render a fallback or an error component if data fetching fails
  if (!homeData) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Could not load homepage data. Please try again later.</p>
      </main>
    );
  }

  return (<HomePage data={homeData} />);
}