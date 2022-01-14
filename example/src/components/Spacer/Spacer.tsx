import React, { FC } from 'react';

import { View } from 'react-native';

type Tspace = '0' | '5' | '10' | '20' | '30' | '40' | '50';
type Torientation = 'vertical' | 'v' | 'horizontal' | 'h';

interface ISpacer {
  orientation?: Torientation;
  space: Tspace;
}

const Spacer: FC<ISpacer> = ({ orientation = 'vertical', space }) => {
  const margin =
    orientation === 'vertical' || orientation === 'v'
      ? 'marginBottom'
      : 'marginRight';

  return <View style={{ [margin]: Number(space) }} />;
};

export default Spacer;
