import { useContext } from 'react';
import styled from 'styled-components';

import SearchBar from './SearchPage';
import Upload from './Upload';
import ButtonTray from './ButtonTray';
import RowHolder from '../../shared/RowHolder';

import { Context } from '../../shared/Context';

export default function Topbar(props) {
  let context = useContext(Context);

  var display;
  if (context.isLive) {
    display =
      <>
        <RowHolder>
          Status:
          {props.receiving
            ? <StyledStatus receiving> Reading Live Data</StyledStatus> // Keep whitespace before text
            : <StyledStatus> No Data Received</StyledStatus>            // Keep whitespace before text
          }
        </RowHolder>
        <ButtonTray viewState={props.viewState} setViewState={props.setViewState} />
      </>;
  } else {
    display =
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