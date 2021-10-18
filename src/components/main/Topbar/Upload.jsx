import styled from "styled-components";

import StyledSVG from '../../shared/StyledSVG';
import HorizSpacer from "../../shared/HorizSpacer";

import upload from '../../../assets/upload.svg';

export default function ButtonTray() {
  return(
    <UploadHolder>
      <HorizSpacer />
      <StyledSVG src={upload} alt='upload' />
      <HorizSpacer />
    </UploadHolder>
  );
}

const UploadHolder = styled.div`
  flex: 0.1;
  max-width: 110px;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;