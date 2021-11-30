import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Section from '../components/Section';

interface AppearProps {
  delay: number;
  className?: string;
}

const Appear: FunctionComponent<AppearProps> = (props) => {
  return (
    <motion.div
      style={{ translateY: -32, opacity: 0 }}
      className={props.className}
      whileInView={{ translateY: 0, opacity: 1, transition: { delay: props.delay } }}>
      {props.children}
    </motion.div>
  );
};

const Bio = () => {
  return (
    <Section id="bio" className="bg-gradient-to-tl from-purple-800 via-purple-900 to-blue-900">
      <div className="flex flex-col items-center justify-center h-full gap-6 p-4 drop-shadow-xl">
        <StaticImage
          className="w-64 rounded-full"
          layout="constrained"
          aspectRatio={1}
          src="../images/hackertim.png"
          alt="HackerTim"
        />
        <h3 className="text-5xl font-semibold text-center text-gray-100">
          Hi, I'm <span className="text-green-500">Timur</span> 👋
        </h3>

        <div className="grid w-full max-w-lg grid-cols-5 gap-4 mx-auto">
          <Appear delay={1}>
            <StaticImage
              layout="constrained"
              className="m-1 rounded-2xl"
              aspectRatio={1}
              src="../images/typescript-logo.png"
              alt="Typescript"
            />
          </Appear>

          <Appear delay={1.5}>
            <StaticImage
              layout="constrained"
              aspectRatio={1}
              className="translate-y-2"
              src="../images/react-logo.png"
              alt="React"
            />
          </Appear>

          <Appear delay={2}>
            <StaticImage
              aspectRatio={1}
              layout="constrained"
              className="m-2 translate-y-4"
              src="../images/nest-logo.svg"
              alt="NestJs"
            />
          </Appear>

          <Appear delay={2.5}>
            <StaticImage
              aspectRatio={0.9}
              layout="constrained"
              className="m-2 translate-y-2"
              src="../images/jest-logo.png"
              alt="Jest"
            />
          </Appear>

          <Appear delay={3}>
            <StaticImage
              aspectRatio={1}
              layout="constrained"
              className="m-2 rounded-2xl"
              src="../images/rescript-logo.png"
              alt="Rescript"
            />
          </Appear>
        </div>
      </div>

      <motion.div
        className="absolute top-4 right-4"
        style={{ translateX: 32, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1, transition: { delay: 6 } }}>
        <StaticImage
          layout="constrained"
          className="w-24 -rotate-12"
          src="../images/gojob-logo.png"
          alt="Gojob"
        />
      </motion.div>
    </Section>
  );
};

export default Bio;
