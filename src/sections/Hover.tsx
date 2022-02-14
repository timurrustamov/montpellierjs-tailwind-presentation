import Section from '../components/Section';
import HoverCode from '../code/hover.mdx';

interface ProjectProps {
  title: string;
  squad: string;
}

const Project = (props: ProjectProps) => {
  return (
    <button className="flex flex-col gap-1 p-4 transition-colors border border-gray-300 rounded-xl hover:bg-blue-500 focus:bg-blue-500 group">
      <p className="text-lg font-medium text-gray-600 transition-colors group-focus:text-gray-100 group-hover:text-gray-100">
        {props.title}
      </p>
      <p className="text-gray-400 group-focus:text-gray-300 group-hover:text-gray-300">
        {props.squad}
      </p>
    </button>
  );
};

const Hover = () => {
  return (
    <Section
      id="hover-and-focus"
      className="grid justify-center grid-rows-3 gap-8 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 drop-shadow-lg">
      <h2 className="flex items-center justify-center py-12 text-5xl text-gray-100 whitespace-pre drop-shadow-md">
        <span className="text-red-400">Hover and focus</span> are supported too !
      </h2>

      <div className="grid items-center justify-center w-full grid-flow-col grid-cols-1 row-span-2 mx-auto max-w-screen-2xl md:grid-cols-2">
        <div className="z-10 flex flex-col flex-1 gap-6 p-8 bg-white rounded-xl">
          <div className="flex flex-row items-center justify-between">
            <p className="text-xl font-semibold text-gray-700">Projects</p>

            <button className="px-4 py-1 text-gray-100 transition-all bg-blue-600 rounded hover:shadow-xl hover:bg-blue-500 focus:shadow-xl">
              New Project ＋
            </button>
          </div>

          <input
            type="search"
            className="h-8 px-2 transition-all border border-gray-300 rounded outline-none focus:ring-1 hover:ring-1 ring-blue-400"
            placeholder="Search projects"
          />
          <div className="grid grid-cols-2 gap-4">
            <Project title="Release i18n" squad="Squad i18n" />
            <Project title="Contractualization" squad="Get Gojobbers 🔥" />
            <Project title="HRIS" squad="Get Money" />
          </div>
        </div>

        <div className="max-w-screen-sm overflow-auto max-h-[500px] rounded-xl -ml-4 hidden md:block code-small">
          <HoverCode />
        </div>
      </div>
    </Section>
  );
};

export default Hover;
