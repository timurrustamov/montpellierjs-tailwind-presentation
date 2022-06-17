import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

export default function DesignSystemComponents() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 h-full flex items-center justify-center">
      <motion.div
        onTap={() => setOpen(!open)}
        className="aspect-1 grid relative z-10 place-items-center mx-auto bg-red-500 rounded-full shadow cursor-pointer w-64 h-64 text-4xl text-white">
        <p>Design System</p>

        <DesignSystemComponent open={open} translateX="-150%" translateY="-85%">
          <Link href="#">Styleguide</Link>
        </DesignSystemComponent>

        <DesignSystemComponent open={open} translateX="0%" translateY="-150%">
          <Link href="#">Visual Language</Link>
        </DesignSystemComponent>

        <DesignSystemComponent open={open} translateX="150%" translateY="-85%">
          <Link href="#">Patterns library</Link>
        </DesignSystemComponent>

        <DesignSystemComponent open={open} translateX="-150%" translateY="85%">
          <Link href="#">Design library</Link>
        </DesignSystemComponent>

        <DesignSystemComponent open={open} translateX="0%" translateY="150%">
          <Link href="#">Voice and tone</Link>
        </DesignSystemComponent>

        <DesignSystemComponent open={open} translateX="150%" translateY="85%">
          <Link href="#">Guidelines</Link>
        </DesignSystemComponent>
      </motion.div>
    </div>
  );
}

interface LinkProps {
  href: string;
  children: string;
}
const Link = (props: LinkProps) => {
  return <a href={props.href}>{props.children}</a>;
};

interface DesignSystemComponentProps {
  open: boolean;
  translateX: `${number}%`;
  translateY: `${number}%`;
  children: ReactNode;
}
const DesignSystemComponent = (props: DesignSystemComponentProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <motion.div
      onAnimationStart={() => setIsAnimating(true)}
      onAnimationComplete={() => setIsAnimating(false)}
      className="aspect-1 grid absolute inset-8 place-items-center p-6 text-center bg-white border-blue-800 border rounded-full text-xl text-red-500 drop-shadow-xl font-bold"
      style={{ zIndex: props.open ? 10 : -1 }}
      animate={
        props.open
          ? {
              translateX: ['0%', props.translateX, props.translateX],
              translateY: ['0%', props.translateY, props.translateY],
              opacity: [0, 1, 1],
            }
          : {
              translateX: [props.translateX, '0%', '0%'],
              translateY: [props.translateY, '0%', '0%'],
              opacity: [1, 0, 0],
            }
      }>
      {props.open || isAnimating ? props.children : null}
    </motion.div>
  );
};
