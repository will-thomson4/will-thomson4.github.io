import { animationEnd, animationStart } from 'react-stateful-animations';

const Card = ({
  title,
  animation,
}: {
  title: string;
  animation: React.ReactNode;
}) => {
  return (
    <div className="shadow border rounded-lg">
      <div className="flex flex-col gap-2 justify-center items-center py-4">
        {animation}
      </div>
      <div className="flex flex-col gap-2 border-t border-gray-300 bg-gray-100 p-4">
        <h2 className="text-base font-medium border-b w-fit pr-8">{title}</h2>

        <div className="flex flex-col sm:flex-row gap-2 text-xs">
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white py-1 px-3 rounded-full w-fit"
            onClick={() => animationStart(title)}
          >
            Start
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded-full border border-gray-400 w-fit"
            onClick={() => animationEnd(title)}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
