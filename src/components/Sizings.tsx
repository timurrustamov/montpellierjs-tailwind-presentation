import classNames from 'classnames';
import { FunctionComponent } from 'react';
import Card from './Card';

interface LineProps {
  width: string;
}

const Line: FunctionComponent<LineProps> = (props) => {
  return (
    <li className="flex items-center gap-2">
      <span className="font-mono text-sm text-gray-400">{props.width}</span>
      <div
        className={classNames('h-3 bg-gradient-to-br from-red-600 to-pink-400', props.width)}></div>
    </li>
  );
};

const Sizings: FunctionComponent = () => {
  return (
    <Card title="Width">
      <ul className="space-y-4">
        <Line width="w-64" />
        <Line width="w-56" />
        <Line width="w-48" />
        <Line width="w-40" />
        <Line width="w-32" />
        <Line width="w-24" />
        <Line width="w-20" />
        <Line width="w-16" />
        <Line width="w-12" />
        <Line width="w-10" />
      </ul>
    </Card>
  );
};

export default Sizings;
