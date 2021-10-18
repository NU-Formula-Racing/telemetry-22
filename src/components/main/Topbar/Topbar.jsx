import styled from 'styled-components';

import ButtonTray from '../button-tray/ButtonTray';
import SearchBar from './SearchBar';
import Upload from './Upload';
import RowHolder from '../../shared/RowHolder';

export default function Topbar(props) {
  if (props.isLive) {
    var display =
      <>
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
      </>;
  } else {
    var display =
    <>
      <SearchBar />
      <Upload />
    </>;
  }

  return (
    <Container>
      {display}
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% + 16px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledStatus = styled.p`
  color: ${props => (props.receiving ? '#42D060' : '#BE0707')}
`;