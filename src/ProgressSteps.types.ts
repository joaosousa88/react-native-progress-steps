export interface IProgressSteps {
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

export interface ItitleColors {
  text: Icolors;
}

export interface ImarkerColors {
  text: Icolors;
  line: Icolors;
}

interface Icolors {
  normal: string;
  active: string;
  completed: string;
}
