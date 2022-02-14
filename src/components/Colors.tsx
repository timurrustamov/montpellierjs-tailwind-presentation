import Card from './Card';

interface NameProps {
  from: string;
  to: string;
}

const Name = (props: NameProps) => {
  return (
    <div className="flex justify-between w-full mb-1 font-mono text-sm text-gray-400">
      <span>{props.from}</span>
      <span>{props.to}</span>
    </div>
  );
};

const Colors = () => {
  return (
    <Card title="Colors">
      <ul className="space-y-2">
        <li>
          <Name from="bg-red-50" to="bg-red-900" />
          <ul className="grid grid-cols-10 h-7">
            <li className="bg-red-50"></li>
            <li className="bg-red-100"></li>
            <li className="bg-red-200"></li>
            <li className="bg-red-300"></li>
            <li className="bg-red-400"></li>
            <li className="bg-red-500"></li>
            <li className="bg-red-600"></li>
            <li className="bg-red-700"></li>
            <li className="bg-red-800"></li>
            <li className="bg-red-900"></li>
          </ul>
        </li>
        <li>
          <Name from="bg-yellow-50" to="bg-yellow-900" />
          <ul className="grid grid-cols-10 h-7">
            <li className="bg-yellow-50"></li>
            <li className="bg-yellow-100"></li>
            <li className="bg-yellow-200"></li>
            <li className="bg-yellow-300"></li>
            <li className="bg-yellow-400"></li>
            <li className="bg-yellow-500"></li>
            <li className="bg-yellow-600"></li>
            <li className="bg-yellow-700"></li>
            <li className="bg-yellow-800"></li>
            <li className="bg-yellow-900"></li>
          </ul>
        </li>
        <li>
          <Name from="bg-green-50" to="bg-green-900" />
          <ul className="grid grid-cols-10 h-7">
            <li className="bg-green-50"></li>
            <li className="bg-green-100"></li>
            <li className="bg-green-200"></li>
            <li className="bg-green-300"></li>
            <li className="bg-green-400"></li>
            <li className="bg-green-500"></li>
            <li className="bg-green-600"></li>
            <li className="bg-green-700"></li>
            <li className="bg-green-800"></li>
            <li className="bg-green-900"></li>
          </ul>
        </li>
        <li>
          <Name from="bg-blue-50" to="bg-blue-900" />
          <ul className="grid grid-cols-10 h-7">
            <li className="bg-blue-50"></li>
            <li className="bg-blue-100"></li>
            <li className="bg-blue-200"></li>
            <li className="bg-blue-300"></li>
            <li className="bg-blue-400"></li>
            <li className="bg-blue-500"></li>
            <li className="bg-blue-600"></li>
            <li className="bg-blue-700"></li>
            <li className="bg-blue-800"></li>
            <li className="bg-blue-900"></li>
          </ul>
        </li>
        <li>
          <Name from="bg-purple-50" to="bg-purple-900" />
          <ul className="grid grid-cols-10 h-7">
            <li className="bg-purple-50"></li>
            <li className="bg-purple-100"></li>
            <li className="bg-purple-200"></li>
            <li className="bg-purple-300"></li>
            <li className="bg-purple-400"></li>
            <li className="bg-purple-500"></li>
            <li className="bg-purple-600"></li>
            <li className="bg-purple-700"></li>
            <li className="bg-purple-800"></li>
            <li className="bg-purple-900"></li>
          </ul>
        </li>
        <li>
          <Name from="bg-pink-50" to="bg-pink-900" />
          <ul className="grid grid-cols-10 h-7">
            <li className="bg-pink-50"></li>
            <li className="bg-pink-100"></li>
            <li className="bg-pink-200"></li>
            <li className="bg-pink-300"></li>
            <li className="bg-pink-400"></li>
            <li className="bg-pink-500"></li>
            <li className="bg-pink-600"></li>
            <li className="bg-pink-700"></li>
            <li className="bg-pink-800"></li>
            <li className="bg-pink-900"></li>
          </ul>
        </li>
      </ul>
    </Card>
  );
};

export default Colors;
