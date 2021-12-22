import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Sushil Buragute">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Sushil. I’m a Developer and a self-taught Designer. The
            overlap of design and software development has always been
            fascinating for me and that’s when I had made up my mind and decided
            to pursue my career in this field.
          </p>
          <p>
            Whenever I’m not coding or subconsciously thinking of a Design, I’m
            either reading about emerging technologies or helping people code on
            #teamTanay discord server.
          </p>
          <p>
            Also I’m fond of Chess, it really pushes my mind to think of the
            possibility of future moves and that eventually reflects in my work,
            thinking a couple of steps ahead to solve problems which will later
            arise.
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
