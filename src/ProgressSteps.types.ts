import type React from 'react';

export type Torientation = 'vertical' | 'horizontal';

export interface IProgressSteps {
  orientation?: Torientation;
  currentStep: number;
  marker?: React.ReactElement;
  steps: {
    id?: string | number;
    title: React.ReactElement;
    content?: React.ReactElement;
  }[];
  colors?: {
    title?: ItitleColors;
    marker?: ImarkerColors;
  };
}

export interface IstepState {
  stepIndex: number;
  isActive: boolean;
  isCompleted: boolean;
  isFirst: boolean;
  isFirstInteraction: boolean;
  isLast: boolean;
}

interface Icolors {
  normal: string;
  active: string;
  completed: string;
}

export interface ItitleColors {
  text: Icolors;
}

export interface ImarkerColors {
  text: Icolors;
  line: Icolors;
}
