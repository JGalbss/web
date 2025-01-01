import { useTime } from '../../lib/hooks/useTime';

export const Header = () => {
  const time = useTime();

  return (
    <div className="w-full flex border-b border-black bg-gray-100 justify-between py-1 px-2">
      <div>josh's website</div>
      <div>{time}</div>
    </div>
  );
};
