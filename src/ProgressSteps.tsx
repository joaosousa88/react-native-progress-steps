import React, { FC, memo, useEffect, useState } from 'react';

import Horizontal from './Horizontal';
import type { IProgressSteps } from './ProgressSteps.types';
import Vertical from './Vertical';

const ProgressSteps: FC<IProgressSteps> = (props) => {
  const { currentStep, orientation } = props;
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);

  useEffect(() => {
    if (isFirstInteraction) {
      setIsFirstInteraction(false);
    }
  }, [currentStep, isFirstInteraction]);

  const newProps = {
    ...props,
    isFirstInteraction,
  };

  if (orientation === 'horizontal') return <Horizontal {...newProps} />;

  return <Vertical {...newProps} />;
};

export default memo(
  ProgressSteps,
  (prevProps, nextProps) =>
    prevProps.steps === nextProps.steps &&
    prevProps.orientation === nextProps.orientation &&
    prevProps.currentStep === nextProps.currentStep
);
