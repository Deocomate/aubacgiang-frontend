import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 2;

  try {
    const apiRes = await fetch(
      `${API_BASE_URL}/training?page=${page}&pageSize=${pageSize}`
    );

    if (!apiRes.ok) {
      throw new Error(
        `Failed to fetch from external API: ${apiRes.statusText}`
      );
    }

    const data = await apiRes.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("[TRAINING_API_ROUTE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
