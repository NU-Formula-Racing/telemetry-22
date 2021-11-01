import { useState } from 'react';
import styled from 'styled-components';

import BasicContainer from '../shared/BasicContainer';

export default function NameInput() {
  let [focus, setFocus] = useState(false);

  const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
          e.target.blur();
      }
  }

  return(
    <BasicContainer flex>
        <StyledInput 
            type="text" 
            placeholder = "Enter Session Name."
            onFocus={(e) => {
                setFocus(true);
            }}
            onBlur={(e) => {
                setFocus(false);
            }}
            onKeyDown={(e) => {handleKeyPress(e)}}
            focus={focus}
        />
    </BasicContainer>
  );
}

const StyledInput = styled.input`
    border: none;
    padding-top: 3px;
    width: 100%;
    font-weight: ${props => (props.focus ? "normal" : "bold")} ;
    ::placeholder {
        font-weight: normal;
    }
    text-overflow: ellipsis;
    :focus {
        outline: none;
    }
`;