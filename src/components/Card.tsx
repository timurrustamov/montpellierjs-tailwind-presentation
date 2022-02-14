import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className={classNames('grid grid-cols-3', props.className)}>
      <div className="p-6 bg-indigo-50">
        <motion.span className="text-xl font-semibold text-purple-900">{props.title}</motion.span>
      </div>

      <div className="col-span-2 p-6">{props.children}</div>
    </div>
  );
};

export default Card;
