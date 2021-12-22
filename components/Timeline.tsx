import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Started my Engineering Journey 🎓">
        Finally, after mugging up all the concepts in the last two years, I had
        the opportunity to begin working on the technologies which actually
        mattered to the end user.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Had my first encounter with CS:GO">
        ... and we all know how that ends.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Wrote my first program! 💻">
        My dad introduced me to programming and that's how ended up writing my
        first program in Java!
      </Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Got a grasp over Typescript">
          Having Type Inference and Optional Static Typing save a couple of
          minutes of debugging is a big plus.
        </Step>
        <Step title="Shipped a product to 6,000 users ✨">
          Designed and developed an admission portal for neoG's 2022 cohort and
          it was used 6,000 users!
        </Step>
        <Step title="Became a part of neoG's 2021 Cohort">
          Picked up the skill of fullstack development, alongside, got to
          interact with various industry professionals.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Joined Think Real as a UI Engineer Intern">
          I helped create the design system for the product as well as create
          the end to end userflow and UI.
        </Step>
        <Step title="Gave my first talk 🎤">
          Under ACMxPCCOER I gave a talk about getting started in web
          development alongside Ashwin.
        </Step>
        <Step title="Picked up UI designing">
          Unknowingly I picked up the skill of UI designing by observing how
          typography, colours and layout are put together.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Started learning web developement">
          Finally I was able which domain I wanted to work in. Web seemed the
          easiest to get in and it has huge potential.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
