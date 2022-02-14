import { ReactNode, useMemo, useState } from 'react';

import Section from '../components/Section';
import Sizings from '../components/Sizings';
import SizingsCode from '../code/sizings.mdx';
import ColorsCode from '../code/colors.mdx';
import TypographyCode from '../code/typography.mdx';
import ShadowsCode from '../code/shadows.mdx';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Colors from '../components/Colors';
import Typography from '../components/Typography';
import Shadows from '../components/Shadows';

interface TabProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Tab = (props: TabProps) => {
  return (
    <li
      onClick={props.onClick}
      className={classNames(
        'flex-1 p-4 text-gray-800 cursor-pointer transition-colors',
        props.active ? 'bg-gray-100' : '',
      )}>
      {props.children}
    </li>
  );
};

type TabName = 'width' | 'colors' | 'typography' | 'shadows';

const Utilities = () => {
  const [activeTab, setActiveTab] = useState<TabName>('width');

  const Demo = useMemo(() => {
    switch (activeTab) {
      case 'width':
        return <Sizings />;
      case 'colors':
        return <Colors />;
      case 'typography':
        return <Typography />;
      case 'shadows':
        return <Shadows />;
    }
  }, [activeTab]);

  const Code = useMemo(() => {
    switch (activeTab) {
      case 'width':
        return <SizingsCode />;
      case 'colors':
        return <ColorsCode />;
      case 'typography':
        return <TypographyCode />;
      case 'shadows':
        return <ShadowsCode />;
    }
  }, [activeTab]);

  return (
    <Section
      id="utilities-css"
      className="grid items-center p-6 bg-gradient-to-br from-indigo-800 to-purple-800">
      <h2 className="text-5xl text-center text-gray-100 drop-shadow-md">
        A <span className="text-red-400">constraint based API</span> for your CSS
      </h2>

      <div className="grid items-center justify-center w-full max-w-screen-xl grid-flow-col grid-cols-1 mx-auto md:grid-cols-2">
        <div className="z-10 flex flex-col overflow-hidden bg-white rounded-xl">
          <ul className="flex border-b border-gray-300 divide-x divide-gray-100 drop-shadow">
            <Tab active={activeTab === 'width'} onClick={() => setActiveTab('width')}>
              📏 Width
            </Tab>
            <Tab active={activeTab === 'colors'} onClick={() => setActiveTab('colors')}>
              🎨 Colors
            </Tab>
            <Tab active={activeTab === 'typography'} onClick={() => setActiveTab('typography')}>
              📘 Typography
            </Tab>
            <Tab active={activeTab === 'shadows'} onClick={() => setActiveTab('shadows')}>
              ❑ Shadows
            </Tab>
          </ul>

          <motion.div layout>{Demo}</motion.div>
        </div>

        <motion.div className="max-w-screen-sm overflow-auto max-h-[500px] rounded-xl -ml-4 hidden md:block">
          {Code}
        </motion.div>
      </div>
    </Section>
  );
};

export default Utilities;
