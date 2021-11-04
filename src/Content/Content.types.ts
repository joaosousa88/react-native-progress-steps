import type { IstepState } from '../ProgressSteps.types';
import type React from 'react';

export interface IContent {
  children: React.ReactElement | React.ReactElement[];
  stepState?: IstepState;
}
