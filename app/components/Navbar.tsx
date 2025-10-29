"use client"

import React, { JSX } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from '../i18n/LocaleProvider'

type NavItem = { label: string; href: string }

export default function Navbar(): JSX.Element {
    const pathname = usePathname() ?? '/'

    const { locale, messages: t } = useLocale()

    const items: NavItem[] = [
        { label: t.nav.home, href: '#' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.contact, href: '#contact' },
    ]

    const makeHref = (href: string) => `/${locale}${href === '/' ? '' : href}`

    return (
        <nav className="bg-blue-500">
            <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
                <h2 className="text-3xl font-bold">{t.title}</h2>
                <ul className="flex gap-3 list-none m-0 p-0">
                    {items.map((item) => {
                        const linkHref = makeHref(item.href)
                        const isActive =
                            item.href === '/'
                                ? pathname === linkHref || pathname === `/${locale}` || pathname === '/'
                                : pathname === linkHref || pathname.startsWith(linkHref)

                        const base = 'text-sm rounded-md px-2 py-1 no-underline'
                        const defaultClass = base + ' text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        const activeClass = base + ' font-semibold bg-gray-100 text-gray-900'

                        return (
                            <li key={item.href}>
                                <Link href={linkHref} className={isActive ? activeClass : defaultClass}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
             </div>
        </nav>
    )
}