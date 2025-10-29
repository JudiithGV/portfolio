import { NextResponse } from "next/server";
 
let locales = ['en', 'es'];
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: { headers?: { get: (arg0: string) => string | null; }; }) {
  const accept = request.headers?.get('accept-language') || ''
  let locale = 'es'
  if (accept) {
    const languages = accept.split(',').map((s: string) => s.split(';')[0].trim())
    for (const lang of languages) {
      const code = lang.split('-')[0]
      if (code === 'en') {
        locale = 'en'
        break
      }
      if (code === 'es') {
        locale = 'es'
        break
      }
    }
  }
  return locale
}

export function proxy(request: { nextUrl?: any; headers?: { get: (arg0: string) => string; }; }) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    '/((?!_next).*)',
    '/'
  ],
}