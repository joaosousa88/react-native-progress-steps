import type { IstepState } from '../ProgressSteps.types';

export interface IContent {
  children: React.ReactElement | React.ReactElement[];
  stepState?: IstepState;
}
