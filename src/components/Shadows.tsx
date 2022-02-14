import Card from './Card';

interface NameProps {
  children: string;
}

const Name = (props: NameProps) => {
  return <div className="mb-1 font-mono text-sm text-gray-400">{props.children}</div>;
};

const Shadows = () => {
  return (
    <Card title="Typography">
      <ul className="grid grid-cols-2 gap-4">
        <li>
          <Name>shadow-sm</Name>
          <div className="h-16 bg-white rounded-lg shadow-sm"></div>
        </li>
        <li>
          <Name>shadow</Name>
          <div className="h-16 bg-white rounded-lg shadow"></div>
        </li>
        <li>
          <Name>shadow-md</Name>
          <div className="h-16 bg-white rounded-lg shadow-md"></div>
        </li>
        <li>
          <Name>shadow-lg</Name>
          <div className="h-16 bg-white rounded-lg shadow-lg"></div>
        </li>
        <li>
          <Name>shadow-xl</Name>
          <div className="h-16 bg-white rounded-lg shadow-xl"></div>
        </li>
        <li>
          <Name>shadow-2xl</Name>
          <div className="h-16 bg-white rounded-lg shadow-2xl"></div>
        </li>
      </ul>
    </Card>
  );
};

export default Shadows;
