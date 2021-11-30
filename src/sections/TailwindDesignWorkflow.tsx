import { FunctionComponent } from 'react';

import Section from '../components/Section';
import { StaticImage } from 'gatsby-plugin-image';

const TailwindDesignWorkflow: FunctionComponent = () => {
  return (
    <Section
      id="classic-design-workflow"
      className="grid items-center grid-rows-3 gap-8 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 drop-shadow-lg">
      <h2 className="flex items-center justify-center py-12 text-5xl text-gray-100 whitespace-pre drop-shadow-md">
        <span className="text-red-400">Primitives based</span> Workflow
      </h2>

      <div className="flex items-center justify-center row-span-2">
        <StaticImage
          className="w-full max-w-screen-md drop-shadow-2xl"
          src="../images/tailwind-design-workflow.png"
          alt="Classic Design Workflow"
          layout="fullWidth"
        />
      </div>
    </Section>
  );
};

export default TailwindDesignWorkflow;
