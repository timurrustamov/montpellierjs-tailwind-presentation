import { useState } from 'react';
import { motion } from 'framer-motion';

import ClassicCSSCode from '../code/classic-css.mdx';
import ImageCard from '../components/ImageCard';
import Section from '../components/Section';
import { StaticImage } from 'gatsby-plugin-image';

const ClassicCSS = () => {
  const [showCode, setShowCode] = useState(false);

  const toggleShowCode = () => setShowCode(!showCode);

  return (
    <Section id="classic-css" className="p-0 bg-gradient-to-br from-indigo-800 to-purple-800">
      <motion.div
        layout
        onClick={toggleShowCode}
        className="flex flex-col items-center justify-center h-full">
        {!showCode ? (
          <motion.div layoutId="classic-css">
            <ImageCard
              title='"Semantic" CSS'
              description={`We "separate our concerns" but there's a very obvious coupling between the CSS and HTML - most of the time the CSS is a mirror for the markup.`}
              Image={
                <StaticImage
                  src="../images/old-school-css.jpeg"
                  alt='"Semantic" CSS'
                  layout="fullWidth"
                />
              }
            />
          </motion.div>
        ) : (
          <motion.div
            layoutId="classic-css"
            className="max-w-full max-h-screen overflow-auto overscroll-auto">
            <h2 className="mb-6 text-4xl text-center text-gray-300 drop-shadow">
              Classic CSS approach 👴
            </h2>
            <ClassicCSSCode />
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default ClassicCSS;
