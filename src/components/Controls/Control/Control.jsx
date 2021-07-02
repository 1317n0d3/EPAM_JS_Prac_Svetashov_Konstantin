import React from 'react';
import './Control.sass';

const Control = ({ activeMode, setActiveMode, currentMode, Icon }) => {
  return (
    <button className={ activeMode === currentMode ? 'control-elem active' : 'control-elem' }
      onClick={ () => setActiveMode(currentMode) }>
      <Icon />
      <span>{ currentMode }</span>
    </button>
  );
}

export default Control;