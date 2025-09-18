import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export default function middleware(request: NextRequest) {
  console.log('Middleware - processing request:', request.nextUrl.pathname);
  
  // Add the pathname to headers so i18n config can access it
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);
  
  const response = intlMiddleware(request);
  
  // Add the pathname header to the response
  if (response) {
    response.headers.set('x-pathname', request.nextUrl.pathname);
  }
  
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|ar|en)/:path*']
};
