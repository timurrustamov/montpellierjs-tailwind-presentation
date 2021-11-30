import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Section from '../components/Section';
import TailwindLogo from '../components/TailwindLogo';

const easeOutCubic = (x: number) => {
  return 1 - Math.pow(1 - x, 3);
};

const Performance = () => {
  const [progress, setProgress] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (isInViewport) {
      const interval = setInterval(
        () =>
          setProgress((progress) => {
            if (progress < 1) {
              return progress + 0.001;
            }
            return progress;
          }),
        1,
      );

      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isInViewport]);

  return (
    <Section
      id="performance"
      className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 drop-shadow-lg">
      <div className="flex flex-col items-center justify-center h-full gap-10">
        <h1 className="flex items-center gap-4 text-4xl text-gray-100">
          It's <span className="text-red-400">tiny in production</span> 🤏
        </h1>

        <motion.div
          className="flex-col w-full max-w-md mx-auto bg-white divide-y divide-gray-200 rounded-xl drop-shadow-lg"
          onViewportEnter={() => setIsInViewport(true)}
          onViewportLeave={() => setIsInViewport(false)}>
          <div className="flex gap-4 p-8">
            <div className="relative w-20 h-20">
              <svg
                viewBox="0 0 64 64"
                className="absolute inset-0 w-full h-full text-green-400"
                transform="rotate(90) scale(1 -1)">
                <motion.path
                  d="M6,32a26,26 0 1,0 52,0a26,26 0 1,0 -52,0"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-dasharray="163.38575744628906px 163.38575744628906px"
                  stroke-width="12"
                  stroke-dashoffset="0px"
                  animate={{
                    pathLength: isInViewport ? 1 : 0,
                    transition: { duration: 4.5 },
                  }}
                />
              </svg>
              <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full">
                <motion.path
                  d="M22.668 33.333l5.333 5.334 13.334-13.334"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="26.399829864501953px 26.399829864501953px"
                  stroke-dashoffset="0px"
                  animate={{
                    opacity: isInViewport ? 1 : 0,
                    transition: { delay: 4.5 },
                  }}
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2 text-4xl text-gray-700">
              <span className="text-2xl text-gray-500">Production build</span>
              {((1 - easeOutCubic(progress)) * 276 + 8.7).toFixed(1)} kB
            </div>
          </div>

          <div className="px-8 py-4 text-gray-400">
            Purged {(easeOutCubic(progress) * 20144).toFixed(0)} unused classes
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Performance;
