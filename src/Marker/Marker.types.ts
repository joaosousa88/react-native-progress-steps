import type { IstepState, ImarkerColors } from '../ProgressSteps.types';

export interface IMarker {
  stepState?: IstepState;
  colors?: ImarkerColors;
}
