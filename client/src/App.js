import React, { useState } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { ALL_VOICES, MICROPHONE, STREAM } from './constants';
import AllVoicesContent from './components/Content/AllVoicesContent';
import MicrophoneContent from './components/Content/MicrophoneContent';
import StreamContent from './components/Content/StreamContent';
import UserCount from './components/UserCount';
import Controls from './components/Controls';
import './App.sass';

function App({ socket }) {
  const [activeMode, setActiveMode] = useState(ALL_VOICES);

  return (
    <BrowserRouter>
      <main>
        <UserCount socket={ socket } />
        <Route path={ `/${ALL_VOICES}` } render={ () => <AllVoicesContent /> } />
        <Route path={ `/${MICROPHONE}` } render={ () => <MicrophoneContent socket={ socket } /> } />
        <Route path={ `/${STREAM}` } render={ () => <StreamContent socket={ socket } /> } />
        <Controls activeMode={ activeMode } setActiveMode={ setActiveMode } />
        
        <Redirect to={ `/${ALL_VOICES}` } />
      </main>
    </BrowserRouter>
  );
}

export default App;
