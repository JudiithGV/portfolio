export type Locale = 'en' | 'es'

export const messages = {
  en: {
    title: 'Web Dev',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      salute: 'Hello, I am Judith',
      role: 'Front-end Developer',
      description: 'focused on React and Next.js',
    }
  },
  es: {
    title: 'Web Dev',
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      salute: 'Hola, soy Judith',
      role: 'Desarrolladora Front-end',
      description: 'enfocada en React y Next.js',
    }
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
