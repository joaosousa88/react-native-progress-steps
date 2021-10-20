export interface IProgressSteps {
  currentStep: number;
  marker?: React.ReactElement;
  steps: {
    id?: string | number;
    title: React.ReactElement;
    content?: React.ReactElement;
  }[];
}

export interface IstepState {
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  isFirst: boolean;
  isFirstInteraction: boolean;
  isLast: boolean;
}
