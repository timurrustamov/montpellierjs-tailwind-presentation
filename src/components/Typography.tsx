import Card from './Card';

interface NameProps {
  children: string;
}

const Name = (props: NameProps) => {
  return <div className="mb-1 font-mono text-sm text-gray-400">{props.children}</div>;
};

const Typography = () => {
  return (
    <Card title="Typography">
      <ul className="space-y-6 text-gray-800">
        <li>
          <Name>font-sans</Name>
          <p className="font-sans">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890
          </p>
        </li>
        <li>
          <Name>font-serif</Name>
          <p className="font-serif">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890
          </p>
        </li>
        <li>
          <Name>font-mono</Name>
          <p className="font-mono">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890
          </p>
        </li>
      </ul>
    </Card>
  );
};

export default Typography;
