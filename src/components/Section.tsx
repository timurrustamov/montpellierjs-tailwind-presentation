import { ReactNode } from 'react';

import classNames from 'classnames';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section = (props: SectionProps) => {
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
