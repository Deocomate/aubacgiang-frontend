"use server";

import { getTrainings } from "@/services/trainingService";

/**
 * Server Action để tải thêm các khóa đào tạo.
 * @param {number} pageIndex
 * @param {number} pageSize
 * @returns {Promise<Object>}
 */
export async function loadMoreTrainings(pageIndex, pageSize) {
  try {
    const trainingData = await getTrainings(pageSize, pageIndex);
    return trainingData;
  } catch (error) {
    console.error("Server Action error in loadMoreTrainings:", error);
    return { error: "Failed to load more trainings." };
  }
}
