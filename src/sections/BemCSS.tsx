import { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';

import BemCSSCode from '../code/bem-css.mdx';
import ImageCard from '../components/ImageCard';
import Section from '../components/Section';
import { StaticImage } from 'gatsby-plugin-image';

const BemCSS: FunctionComponent = () => {
  const [showCode, setShowCode] = useState(false);

  const toggleShowCode = () => setShowCode(!showCode);

  return (
    <Section id="bem-css" className="p-0 bg-gradient-to-br from-indigo-800 to-purple-800">
      <motion.div
        layout
        onClick={toggleShowCode}
        className="flex flex-col items-center justify-center h-full">
        {!showCode ? (
          <motion.div layoutId="bem-css">
            <ImageCard
              title="Decoupling styles from structure"
              description='The markup is still "semantic" and do not contain any styling declisions, and the CSS feels decoupled from the markup structure with the added bonus of avoiding unnecessary selector specificity.'
              Image={<StaticImage src="../images/bem-css.png" alt="BEM CSS" layout="fullWidth" />}
            />
          </motion.div>
        ) : (
          <motion.div
            layoutId="bem-css"
            className="max-w-full max-h-screen overflow-auto overscroll-auto">
            <h2 className="mb-6 text-4xl text-center text-gray-300 drop-shadow">BEM 👩‍🎤</h2>
            <BemCSSCode />
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
};

export default BemCSS;
