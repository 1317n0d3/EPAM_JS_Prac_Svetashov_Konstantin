import React from 'react';
import IconAllVoices from '../../assets/IconAllVoices';
import IconMicrophone from '../../assets/IconMicrophone';
import IconStream from '../../assets/IconStream';
import { ALL_VOICES, MICROPHONE, STREAM } from '../../constants';
import Control from './Control';
import './Controls.sass';

const Controls = ({ activeMode, setActiveMode }) => {
  return (
    <section className='controls'>
      <Control activeMode={ activeMode } setActiveMode={ setActiveMode } currentMode={ ALL_VOICES } Icon={ IconAllVoices } />
      <Control activeMode={ activeMode } setActiveMode={ setActiveMode } currentMode={ MICROPHONE } Icon={ IconMicrophone } />
      <Control activeMode={ activeMode } setActiveMode={ setActiveMode } currentMode={ STREAM } Icon={ IconStream } />
    </section>
  );
}

export default Controls;