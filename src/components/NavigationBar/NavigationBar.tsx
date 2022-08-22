import { FC } from 'react';

const NavigationBar: FC = () => {
  return (
    <header className="h-16 flex justify-center border-b border-gray-dark border-opacity-50">
      <h1 className="font-header font-bold text-white text-lg py-4">TWOFOOTBALL</h1>
    </header>
  );
};

export default NavigationBar;
