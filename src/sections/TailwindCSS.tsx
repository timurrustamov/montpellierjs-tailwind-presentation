import { useState } from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import TailwindCSSCode from '../code/tailwind-css.mdx';
import ImageCard from '../components/ImageCard';
import Section from '../components/Section';

const TailwindCSS = () => {
  const [showCode, setShowCode] = useState(false);

  const toggleShowCode = () => setShowCode(!showCode);

  return (
    <Section id="tailwind-css" className="p-0 bg-gradient-to-br from-indigo-800 to-purple-800">
      <motion.div
        layout
        onClick={toggleShowCode}
        className="flex flex-col items-center justify-center h-full">
        {!showCode ? (
          <motion.div layoutId="tailwind-css">
            <ImageCard
              title="Utility-first CSS"
              description={`We build a while suite of utility classes that respect the design system primitives. The amazing thing about this is that before you know it, you can build entirely new UI components without writing any new CSS.`}
              Image={
                <StaticImage
                  src="../images/utility-first-css.png"
                  alt="Utility-first CSS"
                  layout="fullWidth"
                />
              }
            />
          </motion.div>
        ) : (
          <motion.div
            layoutId="tailwind-css"
            className="max-w-full max-h-screen overflow-auto overscroll-auto">
            <h2 className="mb-6 text-4xl text-center text-gray-300 drop-shadow">Utility CSS 👷‍♂️</h2>
            <TailwindCSSCode />
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default TailwindCSS;
