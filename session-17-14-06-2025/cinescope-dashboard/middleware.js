import { NextResponse } from 'next/server'
import { getSessionCookie } from "better-auth/cookies";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const sessionCookie = getSessionCookie(request); // getting the session cookie
    if (!sessionCookie) {
		return NextResponse.redirect(new URL("/login", request.url)); // if no session cookie redirecting to login
	}
 // return NextResponse.redirect(new URL('/login', request.url)); // this will redirect if the matcher include the path received 
    return NextResponse.next(); //  this will continue route 
}
 
export const config = {
  matcher: ['/admin/:path*']
}