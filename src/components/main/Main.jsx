import styled from 'styled-components';

import Topbar from './Topbar/Topbar';
import DataDisplay from './data-display/DataDisplay';
import VertSpacer from '../shared/VertSpacer';

export default function Main(props) {
  return(
    <MainContainer>
      <Topbar isLive={props.isLive} receiving={false} />
      <VertSpacer />
      <DataDisplay />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 360px;
  height: calc(100vh - 80px);
  width: calc(100vw - 420px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  padding-top: 50px;
`;