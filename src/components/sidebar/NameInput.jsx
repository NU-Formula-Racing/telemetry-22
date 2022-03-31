import { useState } from 'react';
import styled from 'styled-components';

import BasicContainer from '../shared/BasicContainer';

<<<<<<< HEAD
export default function NameInput(props) {
  let [focus, setFocus] = useState(false);
  let [input, setInput] = useState('');
=======
export default function NameInput() {
  let [focus, setFocus] = useState(false);
>>>>>>> searchbar

  const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
          e.target.blur();
      }
  }

<<<<<<< HEAD
  const handleBlur = () => {
      setFocus(false);
      props.setSessionName(input);
  }

=======
>>>>>>> searchbar
  return(
    <BasicContainer flex>
        <StyledInput 
            type="text" 
            placeholder = "Enter Session Name."
<<<<<<< HEAD
            value={input}
            onInput={(e) => setInput(e.target.value)}
            onFocus={(e) => setFocus(true)}
            onBlur={(e) => handleBlur()}
=======
            onFocus={(e) => {
                setFocus(true);
            }}
            onBlur={(e) => {
                setFocus(false);
            }}
>>>>>>> searchbar
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