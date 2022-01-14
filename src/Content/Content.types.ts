import type { IstepState, Torientation } from '../ProgressSteps.types';

import type React from 'react';

export interface IContent {
  children: React.ReactElement | React.ReactElement[];
  orientation?: Torientation;
  stepState?: IstepState;
}

export type Tstyles = {
  [key: string]: {
    [key: string]: {};
  };
};
