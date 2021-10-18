import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

export default function App() {
  const [isLive, toggleLive] = useState(false);

  return (
    <>
      <GlobalStyle/>
      <Sidebar isLive={isLive} toggleLive={toggleLive}/>
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