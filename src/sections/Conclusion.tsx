import { FunctionComponent, useState } from 'react';
import Lottie from 'react-lottie';

import Section from '../components/Section';
import atomAnimationData from '../animation-data/atom.json';
import TailwindLogo from '../components/TailwindLogo';
import { motion } from 'framer-motion';

const Atom: FunctionComponent = () => {
  return (
    <Lottie
      style={{ width: '100%', height: '100%' }}
      options={{
        animationData: atomAnimationData,
        loop: true,
        autoplay: true,
      }}
    />
  );
};

const Conclusion = () => {
  const [step, setStep] = useState(0);

  const incrementStep = () => setStep((step + 1) % 3);

  return (
    <Section
      id="conclusion"
      className="flex items-center justify-center bg-gradient-to-br from-purple-800 via-purple-900 to-blue-900">
      <div className="grid grid-rows-3" onClick={incrementStep}>
        <h2 className="text-6xl text-center text-gray-100 drop-shadow-md">
          <span className="flex items-center gap-4 text-5xl text-gray-100 md:text-8xl">
            <TailwindLogo className="h-10 md:h-24" /> tailwindcss
          </span>
        </h2>

        <motion.div
          className="flex items-center justify-center row-span-2 drop-shadow-xl"
          animate={{ opacity: step > 0 ? 1 : 0 }}>
          <motion.div
            className="rounded-full w-96 h-96 atom"
            animate={{
              backgroundColor: step === 2 ? 'rgba(6, 182, 212, 0)' : 'rgba(6, 182, 212, 1)',
              color: step === 2 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)',
            }}>
            <Atom />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Conclusion;
