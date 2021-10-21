import styled from "styled-components";

import HorizSpacer from "../../shared/HorizSpacer";

import upload from '../../../assets/upload.svg';

export default function ButtonTray() {
  return(
    <UploadHolder>
      <HorizSpacer />
      <img src={upload} alt='upload' width='25px' height='25px' />
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