import { NextResponse } from "next/server";
import subjects from "./subjects.json";
export async function GET(request) {
  return NextResponse.json(subjects);
}
