import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function RootPage() {
  // Server component: read Accept-Language header and redirect to /en or /es
  const h = await headers()
  const accept = (h.get('accept-language') ?? '') as string

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

  // Redirect root to the locale-prefixed path
  redirect(`/${locale}`)
}
