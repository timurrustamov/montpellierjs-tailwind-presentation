import Section from '../components/Section';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AtomicDesign = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section
      id="atomic-design"
      className="flex items-center justify-center bg-gradient-to-br from-purple-800 via-purple-900 to-blue-900">
      <div
        className="w-full h-full max-w-screen-md mx-auto drop-shadow-xl flex flex-col gap-24 py-24 items-center"
        onClick={() => setOpen(!open)}>
        <h2 className="text-5xl text-white">
          <span className="text-red-500">Atomic Design</span> by Brad Frost
        </h2>
        <div className="relative">
          <img
            className="w-full drop-shadow-lg"
            src="https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png"
          />
          <motion.div
            animate={{ opacity: open ? 1 : 0 }}
            className="absolute top-[40%] left-[16.3%] h-8 w-8 bg-red-500 rounded-full animate-ping"
          />
          <motion.div
            animate={{ opacity: open ? 1 : 0 }}
            className="absolute top-[40%] left-[16.3%] h-8 w-8 bg-red-500 rounded-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default AtomicDesign;
