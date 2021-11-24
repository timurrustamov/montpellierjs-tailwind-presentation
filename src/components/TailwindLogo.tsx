import React from 'react';

interface TailwindLogoProps {
  className?: string;
}

const TailwindLogo = (props: TailwindLogoProps) => {
  return (
    <svg viewBox="0.1 0.1 799.7 479.7" className={props.className}>
      <path
        d="M400 0C293 0 227 53 200 160c40-53 87-73 140-60 30 8 52 30 76 54 39 40 85 86 184 86 107 0 173-53 200-160-40 53-87 73-140 60-31-8-52-30-76-54-40-40-85-86-184-86zM200 240C93 240 27 293 0 400c40-53 87-73 140-60 31 8 52 30 76 54 40 40 85 86 184 86 107 0 173-53 200-160-40 53-87 73-140 60-30-8-52-30-76-54-39-40-85-86-184-86z"
        fill="#06b6d4"
      />
    </svg>
  );
};

export default TailwindLogo;
