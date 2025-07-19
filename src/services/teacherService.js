// src/services/teacherService.js
import { unstable_noStore as noStore } from "next/cache";

const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Fetches a list of featured teachers.
 * @param {number} pageSize The number of teachers to fetch.
 * @returns {Promise<Array>} A promise that resolves to an array of teachers.
 */
export async function getFeaturedTeachers(pageSize = 6) {
  noStore();
  try {
    const response = await fetch(
      `${API_BASE_URL}/teachers?pageSize=${pageSize}`
    );
    if (!response.ok) throw new Error("Failed to fetch teachers");
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching featured teachers:", error);
    return [];
  }
}

/**
 * Fetches a single teacher by their slug.
 * @param {string} slug The slug of the teacher.
 * @returns {Promise<Object|null>} A promise that resolves to the teacher object or null if not found.
 */
export async function getTeacherBySlug(slug) {
  noStore();
  try {
    const response = await fetch(`${API_BASE_URL}/teachers/${slug}`);
    if (!response.ok) return null;
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching teacher by slug ${slug}:`, error);
    return null;
  }
}

/**
 * Fetches other teachers, excluding the current one.
 * @param {number} excludeId The ID of the current teacher to exclude.
 * @param {number} pageSize The number of other teachers to fetch.
 * @returns {Promise<Array>} A promise that resolves to an array of other teachers.
 */
export async function getOtherTeachers(excludeId, pageSize = 5) {
  noStore();
  try {
    // Fetches a list and filters out the current teacher.
    const response = await fetch(
      `${API_BASE_URL}/teachers?pageSize=${pageSize + 1}`
    );
    if (!response.ok) throw new Error("Failed to fetch other teachers");
    const result = await response.json();
    const teachers = result.data || [];
    return teachers
      .filter((teacher) => teacher.id !== excludeId)
      .slice(0, pageSize);
  } catch (error) {
    console.error("Error fetching other teachers:", error);
    return [];
  }
}
