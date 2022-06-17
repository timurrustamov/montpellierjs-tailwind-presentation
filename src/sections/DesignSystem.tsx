import { useState } from 'react';
import DesignSystemComponents from '../components/DesignSystemComponents';
import Section from '../components/Section';

const DesignSystem = () => {
  return (
    <Section
      id="design-system"
      className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 drop-shadow-lg">
      <DesignSystemComponents />
    </Section>
  );
};

export default DesignSystem;
