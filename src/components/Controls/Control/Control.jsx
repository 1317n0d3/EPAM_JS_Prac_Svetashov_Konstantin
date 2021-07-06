import React from 'react';
import { useHistory } from 'react-router-dom';
import './Control.sass';

const Control = ({ activeMode, setActiveMode, currentMode, Icon }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${currentMode}`);
    setActiveMode(currentMode);
  }

  return (
    <button className={ activeMode === currentMode ? 'control-elem active' : 'control-elem' }
      onClick={ () => handleClick() }>
      <Icon />
      <span className='control-name'>{ currentMode }</span>
    </button>
  );
}

export default Control;