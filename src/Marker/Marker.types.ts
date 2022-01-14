import type {
  ImarkerColors,
  IstepState,
  Torientation,
} from '../ProgressSteps.types';

export interface IMarker {
  colors?: ImarkerColors;
  orientation?: Torientation;
  stepState?: IstepState;
}

export type Tstyles = {
  [key: string]: {
    [key: string]: {
      [key: string]: string | number;
    };
  };
};
