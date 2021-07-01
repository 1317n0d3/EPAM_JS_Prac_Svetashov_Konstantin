import React from 'react';

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