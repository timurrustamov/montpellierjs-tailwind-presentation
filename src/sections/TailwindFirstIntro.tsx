import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '../components/Section';
import TailwindLogo from '../components/TailwindLogo';
import UglyDefinition from '../components/UglyDefinition';

const TailwindFirstIntro = () => {
  const [displayQuestions, setDisplayQuestions] = useState(false);

  return (
    <Section
      id="what-tailwind"
      className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 drop-shadow-lg">
      <div
        className="flex flex-col items-center justify-center h-full gap-8"
        onClick={() => setDisplayQuestions(!displayQuestions)}>
        <span className="flex items-center gap-4 text-5xl text-gray-100 md:text-8xl">
          <TailwindLogo className="h-10 md:h-24" /> tailwindcss
        </span>

        <UglyDefinition />

        <motion.span className="text-8xl" animate={{ opacity: displayQuestions ? 1 : 0 }}>
          🤔
        </motion.span>
      </div>
    </Section>
  );
};

export default TailwindFirstIntro;
