import Definition from '../components/Definition';
import Section from '../components/Section';
import TailwindLogo from '../components/TailwindLogo';

const TailwindFirstLiveCoding = () => {
  return (
    <Section
      id="what-tailwind"
      className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 drop-shadow-lg">
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <span className="flex items-center gap-4 text-5xl text-gray-100 md:text-8xl">
          <TailwindLogo className="h-10 md:h-24" /> tailwindcss
        </span>

        <Definition />
      </div>
    </Section>
  );
};

export default TailwindFirstLiveCoding;
