import { NextResponse } from "next/server";
export default function middleware(request) {
  //   if (request.nextUrl.pathname !== "/") {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/study/:path*", "/users/:path*"],
};
