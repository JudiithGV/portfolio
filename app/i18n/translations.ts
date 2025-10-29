export type Locale = 'en' | 'es'

export const messages = {
  en: {
    title: 'My Portfolio',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
  },
  es: {
    title: 'Mi Portafolio',
    nav: {
      home: 'Inicio',
      about: 'Sobre',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
  },
} as const

export type Messages = typeof messages[Locale]

export function getMessages(locale?: string): Messages {
  if (!locale) return messages.es
  const code = locale.toLowerCase()
  if (code.startsWith('en')) return messages.en
  if (code.startsWith('es')) return messages.es
  return messages.es
}

export default messages
