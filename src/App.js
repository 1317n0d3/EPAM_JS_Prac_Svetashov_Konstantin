import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { ALL_VOICES, MICROPHONE, STREAM } from './constants';
import AllVoicesContent from './components/Content/AllVoicesContent';
import MicrophoneContent from './components/Content/MicrophoneContent';
import StreamContent from './components/Content/StreamContent';
import Controls from './components/Controls';
import './App.sass';
import { io } from 'socket.io-client';

function App() {
  const [activeMode, setActiveMode] = useState(ALL_VOICES);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io('https://voicy-speaker.herokuapp.com');

    setSocket(socket);
    
    socket.on("connect_error", (error) => {
    console.log(error.message);
    });

    socket.on("connect", () => {
    console.log('socket connected');
    });

    return () => socket.close();
  }, []);

  return (
    <BrowserRouter>
      <main>
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
