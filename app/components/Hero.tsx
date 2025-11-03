"use client"
import { useLocale } from '../i18n/LocaleProvider'
import Image from 'next/image'
import heroSvg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
    const { messages: t } = useLocale()

    return (
        <div className="bg-sky-300 py-24">
            <div className="align-element grid md:grid-cols-2 items-center gap-8">
                <article>
                    <h1 className="text-7xl font-bold tracking-wider">
                        {t.hero.salute}
                    </h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                        {t.hero.role}
                    </p>
                    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                        {t.hero.description}
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        <a href='https://github.com/JudiithGV'>
                        <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href='https://www.linkedin.com/in/judith-giralt-vicente-954b51187/'>
                        <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <Image 
                        src={heroSvg}
                        alt="Hero illustration"
                        className='h-80 lg:h-96 w-auto'
                        priority
                    />
                </article>
            </div>
        </div>
    );
};