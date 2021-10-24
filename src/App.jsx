import { createGlobalStyle } from 'styled-components';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

import { ContextProvider } from './components/shared/Context';

export default function App() {
  return (
    <ContextProvider>
      <GlobalStyle/>
      <Sidebar />
      <Main />
    </ContextProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    overflow: hidden;
  }
`;