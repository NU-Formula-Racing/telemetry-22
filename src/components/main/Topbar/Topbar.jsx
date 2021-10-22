import { useContext } from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import Upload from './Upload';
import SVGButton from './SVGButton';
import RowHolder from '../../shared/RowHolder';
import HorizSpacer from '../../shared/HorizSpacer';

import { Context } from '../../shared/Context';

import stop from '../../../assets/stop.svg';
import play from '../../../assets/play.svg';
import pause from '../../../assets/pause.svg';

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
        <RowHolder>
          <SVGButton
            src={stop}
            label={'stop'}
            setViewState={props.setViewState}
            selected = {props.viewState === 'stop'}
          />
          <HorizSpacer />
          <SVGButton
            src={play}
            label={'play'}
            setViewState={props.setViewState}
            selected = {props.viewState === 'play'}
          />
          <HorizSpacer />
          <SVGButton
            src={pause}
            label={'pause'}
            setViewState={props.setViewState}
            selected = {props.viewState === 'pause'}
          />
        </RowHolder>
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