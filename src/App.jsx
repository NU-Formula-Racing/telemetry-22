import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

export default function App() {
  var [isLive, setIsLive] = useState(false);
  var [currentSensors, setCurrentSensors] = useState([]);
  var [sessionName, setSessionName] = useState('');

  return (
    <>
      <GlobalStyle/>
      <Sidebar
        isLive={isLive} setIsLive={(next) => setIsLive(next)}
        currentSensors={currentSensors} setCurrentSensors={(newState) => setCurrentSensors(newState)}
        setSessionName={(newState) => setSessionName(newState)}
      />
      <Main
        isLive={isLive}
        currentSensors={currentSensors} setCurrentSensors={(newState) => setCurrentSensors(newState)}
      />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;