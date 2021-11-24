import { FunctionComponent, useCallback } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { navigate } from 'gatsby-link';

interface SectionProps {
  id: string;
  className?: string;
}

const Section: FunctionComponent<SectionProps> = (props) => {
  return (
    <section id={props.id} className={classNames('section p-4', props.className)}>
      <a
        href={'#' + props.id}
        className="absolute px-2 font-mono text-gray-400 opacity-50 top-4 left-4">
        ❡
      </a>
      {props.children}
    </section>
  );
};

export default Section;
