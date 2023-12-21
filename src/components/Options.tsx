import { ReactNode } from 'react';

import { OptionsStyle } from './styles/OptionsStyles';

interface OptionsProps {
  buttonA: ReactNode;
  buttonB: ReactNode;
}

const Options: React.FC<OptionsProps> = ({ buttonA, buttonB }) => {
  return (
    <OptionsStyle>
      {buttonA}
      {buttonB}
    </OptionsStyle>
  );
};

export default Options;
