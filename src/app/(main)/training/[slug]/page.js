import TrainingDetailPage from "@/pages/Training/Detail/TrainingDetailPage";
import { COURSE_DATA } from "@/lib/course-data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = COURSE_DATA[slug];

  if (!course) {
    return {
      title: "Không tìm thấy khóa học",
    };
  }
  return {
    title: `${course.title} - A&U Bắc Giang`,
    description: course.shortDescription,
  };
}

export async function generateStaticParams() {
  return Object.keys(COURSE_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = COURSE_DATA[slug];

  if (!course) {
    notFound();
  }

  return <TrainingDetailPage course={course} />;
}
