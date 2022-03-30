import React from 'react';
import {
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript
} from 'react-icons/si';
import Link from 'next/link';

const STACK_TO_ICON = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  posgresql: SiPostgresql
} as const;

interface ProjectCardProps {
  title: string;
  description: string;
  stack: Array<keyof typeof STACK_TO_ICON>;
  href: string;
  projectLogo: any;
  brandColor: string;
}

export default function ProjectCard({
  title,
  description,
  href,
  projectLogo,
  stack,
  brandColor
}: ProjectCardProps) {
  const Logo = projectLogo;

  return (
    <Link href={href} passHref aria-label={title}>
      <a className="block w-full mb-4 animate-scale" href={href}>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded dark:border-gray-800">
          <div className="flex items-center">
            <div
              className={
                ' ml-2 mr-4 !bg-opacity-10 bg-yellow-700 p-2 rounded-full'
              }
            >
              <span className="sr-only">{title}</span>
              <Logo
                className="w-8 h-8 text-gray-900 min-w-sm dark:text-gray-100"
                style={{ color: brandColor }}
              />
            </div>
            <div>
              <div className="flex space-x-2">
                <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {title}
                </h4>
              </div>
              <p className="mt-1 text-sm leading-5 text-gray-700 dark:text-gray-300">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {stack.map((stackItem, idx) => {
                  const Icon = STACK_TO_ICON[stackItem];
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center py-1 text-xs font-semibold text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-1">
                        <Icon className="w-4 h-4" />
                      </span>
                      <p className="text-xs capitalize"> {stackItem}</p>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
