import { StaticImage } from 'gatsby-plugin-image';
import Section from '../components/Section';

const AixJS = () => {
  return (
    <Section
      id="aixjs"
      className="flex items-center justify-center bg-gradient-to-br from-purple-800 via-purple-900 to-blue-900">
      <div className="w-full max-w-xs mx-auto drop-shadow-xl">
        <StaticImage src="../images/aixjs.png" alt="AixJS" layout="fullWidth" />
      </div>
    </Section>
  );
};

export default AixJS;
