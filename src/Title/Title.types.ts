import type {
  IstepState,
  ItitleColors,
  Torientation,
} from '../ProgressSteps.types';

export interface ITitle {
  children: string;
  colors?: ItitleColors;
  orientation?: Torientation;
  stepState?: IstepState;
}

export type Tstyles = {
  [key: string]: {
    [key: string]: {};
  };
};
