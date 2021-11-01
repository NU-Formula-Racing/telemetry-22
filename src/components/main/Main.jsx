import { useState } from 'react';
import styled from 'styled-components';

import Topbar from './topbar/Topbar';
import DataDisplay from './data-display/DataDisplay';
import VertSpacer from '../shared/VertSpacer';

export default function Main() {
  let [viewState, setViewState] = useState('stop');

  return(
    <MainContainer>
      <Topbar
        receiving={false}
        viewState={viewState}
        setViewState={(newState) => setViewState(newState)}
      />
      <VertSpacer />
      <DataDisplay viewState={viewState}/>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 360px;
  height: calc(100vh - 80px);
  width: calc(100vw - 500px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  padding-top: 50px;
`;