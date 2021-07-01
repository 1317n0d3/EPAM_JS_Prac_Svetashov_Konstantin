import React, { useState } from 'react';
import './App.sass';
import Content from './components/Content/Content';
import Controls from './components/Controls/Controls';
import { ALL_VOICES } from './constants/constants';

function App() {
  const [activeMode, setActiveMode] = useState(ALL_VOICES);

  return (
    <main>
      <Content activeMode={ activeMode } />
      <Controls activeMode={ activeMode } setActiveMode={ setActiveMode } />
    </main>
  );
}

export default App;
