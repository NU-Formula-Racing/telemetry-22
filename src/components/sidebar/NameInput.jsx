import { useState } from 'react';
import styled from 'styled-components';

import BasicContainer from '../shared/BasicContainer';
import VertSpacer from '../shared/VertSpacer';
import Dropdown from './Dropdown';

export default function NameInput() {
  let [focus, setFocus] = useState(false);

  return(
      <BasicContainer>
       <StyledInput 
        type="text" 
        placeholder = "Enter Session Name."
        onFocus={(e) => {
            setFocus(true);
        }}
        onBlur={(e) => {
            setFocus(false);
        }}
        focus={focus}
       />
      </BasicContainer>
  );
}

const StyledInput = styled.input`
    border: none;
    width: 100%;
    font-weight: ${props => (props.focus ? "normal" : "bold")} ;
    ::placeholder {
        font-weight: normal;
    }
    text-overflow: ellipsis;
`;


const SelectorContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;