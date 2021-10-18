import styled from 'styled-components';

import ButtonTray from './button-tray/ButtonTray';
import RowHolder from '../shared/RowHolder';

export default function Topbar(props) {
  return (
    <Container>
      <RowHolder content={
        <>
          Status:
          {props.receiving
            ? <StyledStatus receiving> Reading Live Data</StyledStatus> // Keep whitespace before text
            : <StyledStatus> No Data Received</StyledStatus>            // Keep whitespace before text
          }
        </>
      }/>
      <ButtonTray />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledStatus = styled.p`
  color: ${props => (props.receiving ? '#42D060' : '#BE0707')}
`;