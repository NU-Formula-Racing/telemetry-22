import styled from "styled-components";

import RowHolder from "../../shared/RowHolder";

import stop from '../../../assets/stop.svg';
import play from '../../../assets/play.svg';
import pause from '../../../assets/pause.svg';

export default function ButtonTray() {
  return(
    <RowHolder content={
      <>
        <StyledSVG src={stop} alt='stop' />
        <ButtonSpacer />
        <StyledSVG src={play} alt='play' />
        <ButtonSpacer />
        <StyledSVG src={pause} alt='pause' />
      </>
    }/>
  );
}

const ButtonSpacer = styled.div`
  width: 20px;
`;

const StyledSVG = styled.img`
  filter: invert(1) brightness(0.45);
`;