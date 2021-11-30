import { FunctionComponent, ReactElement } from 'react';

interface ImageCardProps {
  Image: ReactElement;
  title: string;
  description: string;
}

const ImageCard: FunctionComponent<ImageCardProps> = (props) => {
  return (
    <div className="w-full max-w-screen-sm p-4 mx-auto">
      <div className="overflow-hidden bg-gray-800 rounded">
        {props.Image}

        <div className="p-8 space-y-4">
          <h2 className="text-2xl text-gray-100">{props.title}</h2>
          <p className="text-lg text-gray-200">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
