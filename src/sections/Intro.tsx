import { motion } from 'framer-motion';
import Section from '../components/Section';
import TailwindLogo from '../components/TailwindLogo';

const Into = () => {
  return (
    <Section
      id="intro"
      className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 drop-shadow-lg">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1 className="flex items-center gap-4 text-4xl text-gray-100 md:text-8xl">
          <TailwindLogo className="h-8 md:h-24" /> tailwindcss
        </h1>

        <motion.h2
          className="text-2xl text-center text-gray-200 md:text-5xl"
          style={{ scale: 0.5, rotate: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { type: 'spring', duration: 2, bounce: 0.6, delay: 1 },
          }}>
          A perfect bridge from <span className="text-green-400">Design</span> to{' '}
          <span className="text-red-400">Application</span> ?
        </motion.h2>
      </div>
    </Section>
  );
};

export default Into;
