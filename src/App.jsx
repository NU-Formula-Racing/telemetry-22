import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

//import { ContextProvider } from './components/shared/Context';

export default function App() {
  var [isLive, setIsLive] = useState(false);

  return (
    <>
      <GlobalStyle/>
      <Sidebar isLive={isLive} setIsLive={(next) => setIsLive(next)} />
      <Main isLive={isLive} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;