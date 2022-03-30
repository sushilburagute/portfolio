import Image from 'next/image';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Snippet } from 'contentlayer/generated';

export default function SnippetLayout({
  children,
  snippet
}: PropsWithChildren<{ snippet: Snippet }>) {
  return (
    <Container
      title={`${snippet.title} - Code Snippet`}
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
              {snippet.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {snippet.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={snippet.title}
              height={48}
              width={48}
              src={`/logos/${snippet.logo}`}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-full prose dark:prose-dark">{children}</div>
      </article>
    </Container>
  );
}
