import { useState } from 'react';
import styled from 'styled-components';

import Topbar from './topbar/Topbar';
import DataDisplay from './data-display/DataDisplay';
import VertSpacer from '../shared/VertSpacer';

export default function Main(props) {
  let [viewState, setViewState] = useState('stop');

  return(
    <MainContainer>
      <Topbar
        isLive={props.isLive}
        receiving={false}
        viewState={viewState}
        setViewState={(newState) => setViewState(newState)}
      />
      <VertSpacer />
<<<<<<< HEAD
      <DataDisplay
        viewState={viewState}
        sensors={props.currentSensors}
        setCurrentSensors={(newState) => props.setCurrentSensors(newState)}
      />
=======
      <DataDisplay viewState={viewState} sensors={props.currentSensors} />
>>>>>>> searchbar
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: absolute;
  top: 0;
<<<<<<< HEAD
  left: 300px;
=======
  left: 330px;
>>>>>>> searchbar
  height: calc(100vh - 80px);
  width: calc(100vw - 420px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 30px;
  padding-top: 50px;
`;