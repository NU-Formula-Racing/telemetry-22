import styled from "styled-components";

import RowHolder from "../../shared/RowHolder";
import StyledSVG from '../../shared/StyledSVG';
import HorizSpacer from "../../shared/HorizSpacer";

import stop from '../../../assets/stop.svg';
import play from '../../../assets/play.svg';
import pause from '../../../assets/pause.svg';

export default function ButtonTray() {
  return(
    <RowHolder content={
      <>
        <StyledSVG src={stop} alt='stop' />
        <HorizSpacer />
        <StyledSVG src={play} alt='play' />
        <HorizSpacer />
        <StyledSVG src={pause} alt='pause' />
      </>
    }/>
  );
}

