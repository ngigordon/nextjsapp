import { NextResponse } from "next/server";
import subjects from "../subjects.json";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filterCourses = subjects.filter((sub) => {
    return sub.title.toLowerCase().includes(query.toLowerCase());
  });
  //   console.log(request.url);
  return NextResponse.json(filterCourses);
}
