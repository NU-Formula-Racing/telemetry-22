import { useState, /* useEffect */ } from 'react';
import { createGlobalStyle } from 'styled-components';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

//import { ContextProvider } from './components/shared/Context';

export default function App() {
  var [isLive, setIsLive] = useState(false);
  var [currentSensors, setCurrentSensors] = useState([]);

  // useEffect(() => {
  //   console.log(currentSensors);
  // })

  return (
    <>
      <GlobalStyle/>
      <Sidebar
        isLive={isLive} setIsLive={(next) => setIsLive(next)}
        currentSensors={currentSensors} setCurrentSensors={(newState) => setCurrentSensors(newState)}
      />
      <Main isLive={isLive} currentSensors={currentSensors} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;