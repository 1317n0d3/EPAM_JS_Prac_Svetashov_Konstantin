import React, { useState } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { ALL_VOICES, MICROPHONE, STREAM } from './constants/constants';
import AllVoicesContent from './components/Content/AllVoicesContent/AllVoicesContent';
import MicrophoneContent from './components/Content/MicrophoneContent/MicrophoneContent';
import StreamContent from './components/Content/StreamContent/StreamContent';
import Controls from './components/Controls/Controls';
import './App.sass';
import { io } from 'socket.io-client';

const socket = io('https://voicy-speaker.herokuapp.com:8080');

console.log(socket.connected);

function App() {
  const [activeMode, setActiveMode] = useState(ALL_VOICES);

  return (
    <BrowserRouter>
      <main>
        <Route path={ `/${ALL_VOICES}` } render={ () => <AllVoicesContent /> } />
        <Route path={ `/${MICROPHONE}` } render={ () => <MicrophoneContent /> } />
        <Route path={ `/${STREAM}` } render={ () => <StreamContent /> } />
        <Controls activeMode={ activeMode } setActiveMode={ setActiveMode } />
        
        <Redirect to={ `/${ALL_VOICES}` } />
      </main>
    </BrowserRouter>
  );
}

export default App;
