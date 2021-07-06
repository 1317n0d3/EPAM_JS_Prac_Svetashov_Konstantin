import React from 'react';
import { ALL_VOICES, MICROPHONE, STREAM } from '../../constants/constants';
import AllVoicesContent from './AllVoicesContent/AllVoicesContent';
import MicrophoneContent from './MicrophoneContent/MicrophoneContent';
import StreamContent from './StreamContent/StreamContent';
import './Content.sass';
import { io } from 'socket.io-client';

const socket = io('https://voicy-speaker.herokuapp.com:8080');

console.log(socket.connected);


const Content = ({ activeMode }) => {
  const renderActiveMode = (activeMode) => {
    switch(activeMode) {
      case ALL_VOICES:
        return <AllVoicesContent />
      case MICROPHONE:
        return <MicrophoneContent />
      case STREAM:
        return <StreamContent />
      default:
        return 'EMPTY'
    }
  }

  return (
    <section className='current-control'>{ renderActiveMode(activeMode) }</section>
  );
}

export default Content;