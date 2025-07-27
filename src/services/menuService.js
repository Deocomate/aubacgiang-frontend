// src/services/menuService.js
import {unstable_noStore as noStore} from "next/cache";

const API_BASE_URL = process.env.API_BASE_URL;

export async function getMenus() {
    noStore();
    try {
        const response = await fetch(`${API_BASE_URL}/menus`);

        if (!response.ok) {
            throw new Error("Failed to fetch menus");
        }

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Error fetching menus:", error);
        return [];
    }
}