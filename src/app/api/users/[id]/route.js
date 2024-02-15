import { NextResponse } from "next/server";

export function GET(request, content) {
  const userId = content.params.id;

  const data = [
    { id: 1, name: "hitesh", age: 24, gmail: "hitesh@test.com" },
    { id: 2, name: "samir", age: 19, gmail: "samir@test.com" },
    { id: 3, name: "dover", age: 4, gmail: "dover@test.com" },
    { id: 4, name: "sam", age: 38, gmail: "sam@test.com" },
    { id: 5, name: "giraj", age: 26, gmail: "giraj@test.com" },
  ];
  const filterUserData = data.filter((item) => item.id == userId);
  return NextResponse.json(filterUserData, { status: 200 });
}
