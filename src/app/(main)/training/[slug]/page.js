// src/app/(main)/training/[slug]/page.js
import TrainingDetailPage from "@/pages/Training/Detail/TrainingDetailPage";
import { getTrainingBySlug, getAllTrainings, getOtherTrainings } from "@/services/trainingService";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params; // SỬA LẠI: Thêm `await`
  const course = await getTrainingBySlug(slug);

  if (!course) {
    return {
      title: "Không tìm thấy khóa học",
    };
  }

  const plainDescription = course.description?.replace(/<[^>]+>/g, '').substring(0, 160) || `Chi tiết khóa học ${course.title} tại A&U English.`;

  return {
    title: `${course.title} - A&U Bắc Giang`,
    description: plainDescription,
  };
}

export async function generateStaticParams() {
  const allTrainings = await getAllTrainings();
  return allTrainings.map((training) => ({
    slug: training.slug,
  }));
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params; // SỬA LẠI: Thêm `await`
  
  const [course, otherCourses] = await Promise.all([
    getTrainingBySlug(slug),
    getOtherTrainings(slug, 5)
  ]);

  if (!course) {
    notFound();
  }

  return <TrainingDetailPage course={course} otherCourses={otherCourses} />;
}