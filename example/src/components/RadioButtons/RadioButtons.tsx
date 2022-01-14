import React, { Fragment } from 'react';

import RadioButton from '../RadioButton';
import Spacer from '../Spacer';

const RadioButtons = ({ data, selected, handleSelect }) => {
  const handleSelectOption = (item) => () => {
    handleSelect(item);
  };

  return data.map((item, index) => (
    <Fragment key={item}>
      <RadioButton
        isActive={item === selected}
        label={item}
        handleSelect={handleSelectOption(item)}
      />
      {index !== data.length - 1 && <Spacer space="5" />}
    </Fragment>
  ));
};

export default RadioButtons;
