import styled from "styled-components";

export default function RowHolder(props) {
  return(
    <StyledHolder>
      {props.content}
    </StyledHolder>
  );
}

const StyledHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;