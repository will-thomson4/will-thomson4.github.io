import { Download, Upload, Send } from 'react-stateful-animations';
import Card from './card';
import Lottie from '@lottielab/lottie-player/react';

const animations = [
  {
    title: 'Download',
    animation: <Download id="Download" className="w-16 h-16" />,
  },
  {
    title: 'Upload',
    animation: <Upload id="Upload" className="w-16 h-16" />,
  },
  {
    title: 'Send',
    animation: <Send id="Send" className="w-16 h-16" />,
  },
];

const Section = () => {
  return (
    <div className="max-w-4xl mx-auto px-8">
      <div className="flex flex-row gap-4 items-center">
        <h1 className="text-4xl font-bold mb-4 py-8 border-b">
          React Stateful Animations
        </h1>
        <Lottie
          src="https://cdn.lottielab.com/l/BybenNjXJZTWm2.json"
          autoplay
          loop
          className="w-16 h-16 mb-6"
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="prose prose-slate">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            React Stateful Animations is a library of animated icons which hold
            a state. Unlike traditional animated icons that run for a fixed
            duration, these icons transition between states and maintain their
            states indefinitely.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 text-sm">
            All animations built in{' '}
            <a className="text-blue-500" href="https://lottielab.com">
              LottieLab
            </a>
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.npmjs.com/package/react-stateful-animations">
              <img src="/npm.svg" alt="NPM Logo" className="w-12 h-12" />
            </a>
            <a href="https://github.com/will-thomson4/react-stateful-animations">
              <img src="/github.svg" alt="Github Logo" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="my-4">
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <div className="bg-gray-50 border rounded-lg p-6 mb-2">
            <img src="/snippet.svg" alt="Code example" className="w-full" />
          </div>
          <p>
            The code snippet above shows an example of how to use the
            <code className="bg-gray-100 p-1 rounded">Download</code>
            icon. Import the icon, as well as the{' '}
            <code className="bg-gray-100 p-1 rounded">animationStart</code> and
            <code className="bg-gray-100 p-1  rounded">animationEnd</code>
            functions. Give the icon an id, and then call the
            <code className="bg-gray-100 p-1 mx-1 rounded">
              animationStart
            </code>{' '}
            function with the id to start the animation.
          </p>
        </div>

        <div className="my-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Available Icons{' '}
            <span className="text-sm text-gray-500">(more coming soon!)</span>
          </h2>
          <p className="text-gray-700 mb-6">
            The following components are available in the{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">
              react-stateful-animations
            </code>{' '}
            package:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {animations.map((animation) => (
              <Card
                key={animation.title}
                title={animation.title}
                animation={animation.animation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
