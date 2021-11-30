import classNames from 'classnames';
import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

interface CardProps {
  title: string;
  className?: string;
}

const Card: FunctionComponent<CardProps> = (props) => {
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
