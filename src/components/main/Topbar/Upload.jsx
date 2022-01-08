import { useRef } from 'react';
import styled from "styled-components";

import HorizSpacer from "../../shared/HorizSpacer";

import upload from '../../../assets/upload.svg';

export default function ButtonTray() {
  const uploadRef = useRef(null);

  return(
    <UploadHolder onClick={() => {uploadRef.current.click()}}>
      <input type='file' hidden ref={uploadRef} />
      <HorizSpacer />
      <Clickable src={upload} alt='upload' width='25px' height='25px' />
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

const Clickable = styled.img`
  cursor: pointer;
`;