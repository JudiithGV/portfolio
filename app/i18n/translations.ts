export type Locale = 'en' | 'es'

export const messages = {
  en: {
    title: 'Web Dev',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      salute: 'Hello, I am Judith',
      role: 'Front-end Developer',
      description: 'focused on React and Next.js',
    },
    skills: {
      title: 'Tech Stack',
      html: {
        title: 'HTML&CSS',
        description: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences',
      },
      javascript: {
        title: 'JavaScript',
        description: 'Experienced in JavaScript, with a focus on building dynamic and interactive web applications',
      },
      typescript: {
        title: 'TypeScript',
        description: 'Skilled in TypeScript, leveraging its features to build robust and maintainable codebases',
      },
      react: {
        title: 'React',
        description: 'Expert in React, with a deep understanding of its ecosystem and best practices for building scalable applications',
      },
      nextjs: {
        title: 'Next.js',
        description: 'Continuously learning Next.js, using its features for server-side rendering and static site generation',
      },
      tailwindcss: {
        title: 'Tailwind CSS',
        description: 'Experienced in Tailwind CSS, enabling rapid UI development with a utility-first approach',
      },
      git: {
        title: 'Git',
        description: 'Skilled in Git, with a strong understanding of version control workflows and collaboration best practices',
      },
      docker: {
        title: 'Docker',
        description: 'Familiar with Docker, utilizing containerization to streamline development and deployment processes',
      }
    }
  },
  es: {
    title: 'Web Dev',
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      salute: 'Hola, soy Judith',
      role: 'Desarrolladora Front-end',
      description: 'enfocada en React y Next.js',
    },
    skills: {
      title: 'Tech Stack',
      html: {
        title: 'HTML&CSS',
        description: 'Alta competencia en HTML y CSS, creando sitios web visualmente atractivos y responsivos para experiencias de usuario óptimas',
      },
      javascript: {
        title: 'JavaScript',
        description: 'Experimentada en JavaScript, con un enfoque en la construcción de aplicaciones web dinámicas e interactivas',
      },
      typescript: {
        title: 'TypeScript',
        description: 'Hábil en TypeScript, aprovechando sus características para construir bases de código robustas y mantenibles',
      },
      react: {
        title: 'React',
        description: 'Experta en React, con un profundo entendimiento de su ecosistema y mejores prácticas para construir aplicaciones escalables',
      },
      nextjs: {
        title: 'Next.js',
        description: 'En constante aprendizaje en Next.js, utilizando sus características para renderizado del lado del servidor y generación de sitios estáticos',
      },
      tailwindcss: {
        title: 'Tailwind CSS',
        description: 'Experimentada en Tailwind CSS, permitiendo un desarrollo rápido de interfaces de usuario con un enfoque utility-first',
      },
      git: {
        title: 'Git',
        description: 'Hábil en Git, con un sólido entendimiento de flujos de trabajo de control de versiones y mejores prácticas de colaboración',
      },
      docker: {
        title: 'Docker',
        description: 'Familiarizada con Docker, utilizando la contenedorización para optimizar los procesos de desarrollo y despliegue',
      },
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
