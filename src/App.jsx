import styled from 'styled-components';

import { useState, useContext, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

import { Context } from './components/shared/Context';

export default function App() {
  let context = useContext(Context);

  var [isLive, setIsLive] = useState(false);
  var [currentSensors, setCurrentSensors] = useState([]);
  var [sessionName, setSessionName] = useState('');

  const handleMouseDown = (e) => {
    context.setMouseCoords(e.clientX, e.clientY);
    context.setDragging(true);
  }

  const handleMouseUp = (e) => {
    context.setMouseCoords(e.clientX, e.clientY);
    context.setDragging(false);
  }

  useEffect(() => {
    //console.log(`${context.mouseX} ${context.mouseY}`);
  }, [context.mouseX, context.mouseY, context.dragging])

  return (
    <div onMouseDown={(e) => {handleMouseDown(e)}} onMouseUp={(e) => {handleMouseUp(e)}}>
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
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;