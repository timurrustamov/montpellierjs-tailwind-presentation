import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import Section from '../components/Section';

const AixJS = () => {
  return (
    <Section
      id="aixjs"
      className="flex items-center justify-center bg-gradient-to-br from-purple-800 via-purple-900 to-blue-900">
      <div className="w-full h-full max-w-xs mx-auto drop-shadow-xl grid grid-flow-col grid-rows-3 place-items-center">
        <StaticImage
          className="row-span-2 w-full drop-shadow-xl"
          src="../images/monpellierjs.jpeg"
          alt="AixJS"
          layout="fullWidth"
        />

        <motion.span
          className="text-white text-7xl"
          animate={{ translateY: [0, -5, 0] }}
          transition={{ repeat: Infinity, bounce: 0.7, ease: 'easeInOut', times: [0, 0.7, 1] }}>
          ↓
        </motion.span>
      </div>
    </Section>
  );
};

export default AixJS;
