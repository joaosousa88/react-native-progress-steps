import type { IstepState, ItitleColors } from '../ProgressSteps.types';

export interface ITitle {
  children: string;
  stepState?: IstepState;
  colors?: ItitleColors;
}
