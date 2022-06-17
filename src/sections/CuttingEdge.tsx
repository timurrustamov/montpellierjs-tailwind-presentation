import Section from '../components/Section';

const CuttingEdge = () => {
  return (
    <Section
      id="cutting-edge"
      className="grid items-center p-6 bg-gradient-to-br from-purple-900 to-indigo-800">
      <div className="space-y-6">
        <h2 className="text-5xl text-center text-gray-100 drop-shadow-md">Cutting edge CSS</h2>

        <h2 className="text-4xl text-center text-gray-100 drop-shadow-md">
          <span className="text-green-600">Grid</span> /{' '}
          <span className="text-green-500">Transitions</span> /{' '}
          <span className="text-green-400">Filters</span> /{' '}
          <span className="text-green-300">And many more ...</span>
        </h2>
      </div>

      <div className="grid grid-flow-cols grid-rows-2 grid-cols-3 gap-8 p-12 group w-full max-w-screen-md mx-auto">
        <div className="relative aspect-square">
          <img
            className="drop-shadow-xl absolute inset-0 w-full h-full object-cover group-hover:-translate-x-8 group-hover:-translate-y-7 group-hover:-rotate-2 transition-all duration-500 blur-0 group-hover:blur-md"
            src="/monpellierjs.jpeg"
            alt="monpellierjs"
          />
        </div>
        <div className="relative aspect-square">
          <img
            className="drop-shadow-xl absolute inset-0 w-full h-full object-cover rounded-xl group-hover:-translate-x-4 group-hover:translate-y-7 group-hover:-rotate-6 transition-all sepia-0 group-hover:sepia duration-500"
            src="/gojob.jpeg"
            alt="gojob"
          />
        </div>
        <div className="relative aspect-square">
          <img
            className="drop-shadow-xl absolute inset-0 w-full h-full object-cover group-hover:translate-y-8 group-hover:rotate-8 transition-all duration-500 brightness-100 group-hover:brightness-150"
            src="/typescript.png"
            alt="typescript"
          />
        </div>
        <div className="relative aspect-square">
          <img
            className="drop-shadow-xl absolute inset-0 w-full h-full object-cover rounded-xl group-hover:translate-x-8 group-hover:translate-y-7 group-hover:rotate-6 transition-all duration-500 hue-rotate-0 group-hover:hue-rotate-90"
            src="/aix-en-provence.jpeg"
            alt="aix"
          />
        </div>
        <div className="row-start-1 col-start-2 col-span-2 relative">
          <img
            className="drop-shadow-xl absolute inset-0 w-full h-full object-cover rounded-xl group-hover:translate-x-8 group-hover:-translate-y-7 group-hover:rotate-6 grayscale-0 group-hover:grayscale transition-all duration-500"
            src="/montpellier.jpeg"
            alt="montpellier"
          />
        </div>
      </div>
    </Section>
  );
};

export default CuttingEdge;
