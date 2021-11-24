import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Section from '../components/Section';

const WhereTailwind = () => {
  return (
    <Section id="where-tailwind" className="bg-gradient-to-b from-purple-800 to-blue-900">
      <div className="grid h-full grid-flow-col p-4">
        <ClassicCssWorkflow />
      </div>
    </Section>
  );
};

export default WhereTailwind;

const PostProcessors = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <h3 className="text-3xl text-center text-gray-200 drop-shadow-xl">
        Post Processors / CSS in JS{' '}
      </h3>

      <div className="grid items-center grid-cols-3 gap-2 drop-shadow-xl">
        <StaticImage src="../images/sass-logo.png" alt="Sass" className="flex-1" />
        <StaticImage
          src="../images/postcss-logo.png"
          alt="PostCSS"
          className="flex-1 self-baseline"
        />
        <StaticImage
          src="../images/emotion-logo.png"
          alt="Emotion"
          className="flex-1 rounded-full"
        />
      </div>
    </div>
  );
};

const ClassicCssWorkflow = () => {
  return (
    <div className="grid grid-flow-row">
      
      <div className="text-center text-gray-400 text-8xl drop-shadow-2xl">{' ↓ '}</div>
      <PostProcessors />
      
    </div>
  );
};
