import { ReactNode } from 'react'
import { LocaleProvider } from '../i18n/LocaleProvider'
import { getMessages } from '../i18n/translations'
import { Navbar } from '../components/Navbar'

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const resolvedParams = await params
  const raw = resolvedParams.locale || ''
  const locale = raw === 'en' ? 'en' : 'es'
  const messages = getMessages(raw)

  return (
    <html lang={locale}>
      <body>
        <LocaleProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
