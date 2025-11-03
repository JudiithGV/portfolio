"use client";
import SkillsCard from "./SkillsCard";
import { useLocale } from '../i18n/LocaleProvider'
import { FaCss3, FaDocker, FaGitSquare, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { JSX } from "react";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const Skills = () => {
const { messages: t } = useLocale();

const skills: Array<{title: string, icon: JSX.Element}> = 
[
    {title: "html", icon: <FaHtml5 className='h-16 w-16 text-sky-500' />}, 
    {title: "javascript", icon: <FaJs className='h-16 w-16 text-sky-500' />}, 
    {title: "typescript", icon: <SiTypescript className='h-16 w-16 text-sky-500' />}, 
    {title: "react", icon: <FaReact className='h-16 w-16 text-sky-500' />}, 
    {title: "nextjs", icon: <RiNextjsFill className='h-16 w-16 text-sky-500' />},
    {title: "tailwindcss", icon: <RiTailwindCssFill className='h-16 w-16 text-sky-500' />}, 
    {title: "git", icon: <FaGitSquare className='h-16 w-16 text-sky-500' />},
    {title: "docker", icon: <FaDocker className='h-16 w-16 text-sky-500' />},
];

  return (
   <section className='py-20 align-element ' id='skills'>
        <div className='border-b border-gray-200 pb-5'>
            <h2 className='text-3xl font-medium tracking-wider capitalize'>{t.skills.title}</h2>
        </div>
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.title} icon={skill.icon} title={t.skills[skill.title].title} text={t.skills[skill.title].description} />;
        })}
      </div>
    </section>
    );
};