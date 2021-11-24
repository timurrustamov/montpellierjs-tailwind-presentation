import { useScrollRestoration } from 'gatsby';
import React, { FunctionComponent } from 'react';

import Bio from '../sections/Bio';
import Intro from '../sections/Intro';
import TailwindFirstIntro from '../sections/TailwindFirstIntro';
import TailwindFirstLiveCoding from '../sections/TailwindFirstLiveCoding';
import WhereTailwind from '../sections/WhereTailwind';
import Hl from '../code/classic-css.mdx';
import Section from '../components/Section';

const Home: FunctionComponent = () => {
  const scrollRestoration = useScrollRestoration('home');

  return (
    <main className="h-full presentation" {...scrollRestoration}>
      <Intro />
      <Bio />
      <TailwindFirstIntro />
      <Section id="what">
        <Hl />
      </Section>
      <TailwindFirstLiveCoding />
      <WhereTailwind />
    </main>
  );
};

export default Home;
