import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import ProjectCard from 'components/ProjectCard';
import { Ecommerce } from 'components/Icons';
import { SiTwitter } from 'react-icons/si';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
              Sushil Buragute
            </h1>
            {/* <h2 className="mb-4 text-gray-700 dark:text-gray-200">
              Director of Developer Relations at{' '}
              <span className="font-semibold">Vercel</span>
            </h2> */}
            <h2 className="mb-4 text-gray-700 dark:text-gray-200">
              A developer with an eye for design.
            </h2>
            <p className="mb-16 text-gray-600 dark:text-gray-400">
              Communicating with Machines using Code and to Humans using Design.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Sushil Buragute"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Featured Posts
        </h3>
        <div className="flex flex-col gap-6 md:flex-row">
          <BlogPostCard
            title="A Basic Guide for Github Actions"
            slug="basic-guide-github-action"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Having a Unique Selling Proposition can set you apart"
            slug="usp-to-set-you-apart"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="Why I love the Cloud"
            slug="why-i-love-the-cloud"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>
        <Link href="/blog">
          <a className="flex h-6 mt-8 leading-7 text-gray-600 transition-all rounded-lg dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <h3 className="mt-16 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Projects
        </h3>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Implementing something is the best way to learn something. Here's a
          few of the project I've implemented to learn a particular tech-stack.
        </p>
        {/* <p className="mb-4 text-gray-600 dark:text-gray-400">
          Adding these bits soon!🚀
        </p> */}
        <ProjectCard
          href="https://zuck-food.vercel.app"
          title="Zuck | Order Food Online "
          projectLogo={Ecommerce}
          brandColor={'#EA580C'}
          stack={['typescript', 'nextjs', 'react', 'nodejs', 'mongodb']}
          description="An food ecommerce store built with amazing UIUX and performance in mind."
        />
        <ProjectCard
          href="https://space-board.vercel.app"
          title="Spaceboard"
          projectLogo={SiTwitter}
          brandColor={'#38BDF8'}
          stack={['typescript', 'nextjs', 'react']}
          description="[Building] An instant way of making creatives for your Twitter Space."
        />
        <span className="h-16" />
      </div>
    </Container>
  );
}
